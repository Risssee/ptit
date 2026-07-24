(function () {
  "use strict";

  const config = window.PTIT_SCENE_NARRATION_CONFIG;
  if (!config || !config.scenes) return;

  const visitedKey = config.visitedKey || "ptit-scene-narration-visited";
  const visited = new Set(JSON.parse(sessionStorage.getItem(visitedKey) || "[]"));
  let currentScene = "";
  let currentEntry = null;
  let timer = 0;
  let speaking = false;
  let narrationAudio = null;

  const card = document.createElement("aside");
  card.className = "scene-narration";
  card.setAttribute("aria-live", "polite");
  card.innerHTML = `
    <button class="scene-narration__close" type="button" aria-label="Đóng lời dẫn">×</button>
    <p class="scene-narration__eyebrow">Lời dẫn tại điểm này</p>
    <h2 class="scene-narration__title"></h2>
    <p class="scene-narration__text"></p>
    <div class="scene-narration__actions">
      <button class="scene-narration__replay" type="button">↻ Nghe lại</button>
      <span class="scene-narration__status"></span>
    </div>`;
  document.body.appendChild(card);

  const title = card.querySelector(".scene-narration__title");
  const text = card.querySelector(".scene-narration__text");
  const replay = card.querySelector(".scene-narration__replay");
  const status = card.querySelector(".scene-narration__status");

  function audioAllowed() {
    return !window.ptitAudioAllowed || window.ptitAudioAllowed();
  }

  function stopSpeech(hide) {
    clearTimeout(timer);
    window.speechSynthesis?.cancel();
    if (narrationAudio) {
      narrationAudio.pause();
      narrationAudio.currentTime = 0;
      narrationAudio = null;
    }
    if (speaking) window.dispatchEvent(new CustomEvent("ptit:narrationend"));
    speaking = false;
    status.textContent = audioAllowed() ? "" : "Âm thanh đang tắt";
    if (hide) card.classList.remove("is-visible");
  }

  function chooseVietnameseVoice() {
    const voices = window.speechSynthesis?.getVoices() || [];
    return voices.find((voice) => /^vi(-|_)/i.test(voice.lang)) || null;
  }

  function speak(entry) {
    if (!entry || !audioAllowed()) {
      status.textContent = "Hãy bật âm thanh để nghe lời dẫn";
      return;
    }
    stopSpeech(false);
    window.dispatchEvent(new CustomEvent("ptit:stop-infopost-narration"));
    if (entry.audio) {
      narrationAudio = new Audio(entry.audio);
      narrationAudio.preload = "auto";
      narrationAudio.onplay = () => {
        speaking = true;
        status.textContent = "Đang phát lời dẫn";
        window.dispatchEvent(new CustomEvent("ptit:narrationstart"));
      };
      narrationAudio.onended = narrationAudio.onerror = () => {
        if (speaking) window.dispatchEvent(new CustomEvent("ptit:narrationend"));
        speaking = false;
        narrationAudio = null;
        status.textContent = "";
      };
      narrationAudio.play().catch(() => {
        status.textContent = "Chạm vào Nghe lại để phát lời dẫn";
      });
      return;
    }
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(entry.text);
    utterance.lang = "vi-VN";
    utterance.rate = config.rate || 0.96;
    utterance.pitch = 1;
    const voice = chooseVietnameseVoice();
    if (voice) utterance.voice = voice;
    utterance.onstart = () => {
      speaking = true;
      status.textContent = "Đang phát lời dẫn";
      window.dispatchEvent(new CustomEvent("ptit:narrationstart"));
    };
    utterance.onend = utterance.onerror = () => {
      if (speaking) window.dispatchEvent(new CustomEvent("ptit:narrationend"));
      speaking = false;
      status.textContent = "";
    };
    window.speechSynthesis.speak(utterance);
  }

  function scheduleAutoNarration(scene, entry) {
    if (!entry || !audioAllowed() || visited.has(scene)) return;
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (currentScene !== scene || !audioAllowed()) return;
      visited.add(scene);
      sessionStorage.setItem(visitedKey, JSON.stringify(Array.from(visited)));
      speak(entry);
    }, config.delay || 700);
  }

  function enterScene(scene) {
    const entry = config.scenes[scene];
    stopSpeech(true);
    currentScene = scene;
    currentEntry = entry || null;
    if (!entry) return;

    title.textContent = entry.title;
    text.textContent = entry.text;
    replay.disabled = !audioAllowed();
    status.textContent = audioAllowed() ? "" : "Âm thanh đang tắt";
    card.classList.add("is-visible");

    scheduleAutoNarration(scene, entry);
  }

  function watchKrpano() {
    const instance = window.ptitKrpano;
    if (!instance) return;
    const scene = instance.get("xml.scene") || "";
    if (scene && scene !== currentScene) enterScene(scene);
  }

  replay.addEventListener("click", () => speak(currentEntry));
  card.querySelector(".scene-narration__close").addEventListener("click", () => stopSpeech(true));
  window.addEventListener("ptit:stop-scene-narration", () => stopSpeech(true));
  window.addEventListener("ptit:audiochange", (event) => {
    const enabled = Boolean(event.detail?.enabled);
    replay.disabled = !enabled;
    status.textContent = enabled ? "" : "Âm thanh đang tắt";
    if (enabled && currentEntry) {
      card.classList.add("is-visible");
      scheduleAutoNarration(currentScene, currentEntry);
    }
  });
  window.setInterval(watchKrpano, 250);
})();
