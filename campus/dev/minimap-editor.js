(function (root) {
  "use strict";

  const LEGACY_STORAGE_KEY = "ptit:minimap:scene-positions:v1";
  const STORAGE_KEY = "ptit:minimap:scene-positions:v2";

  function readSavedScenePositions() {
    try {
      root.localStorage.removeItem(LEGACY_STORAGE_KEY);
      const saved = JSON.parse(root.localStorage.getItem(STORAGE_KEY) || "{}");
      return saved && typeof saved === "object" ? saved : {};
    } catch (_) {
      return {};
    }
  }

  function attach(context) {
    const { minimap, toggle, savedScenePositions, getCurrentScene, positionFor, setDotPosition } = context;
    minimap.classList.add("is-coordinate-editing");
    const editHistory = [];
    const editorActions = document.createElement("div");
    editorActions.className = "campus-minimap__editor-actions";
    editorActions.innerHTML = `
      <button type="button" data-map-action="undo" title="Hoàn tác lần đặt điểm gần nhất">Hoàn tác</button>
      <button type="button" data-map-action="delete" title="Xóa tọa độ đã lưu của scene hiện tại">Xóa điểm</button>`;
    minimap.querySelector(".campus-minimap__head").insertBefore(editorActions, toggle);

    const save = () => root.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedScenePositions));
    const activeScene = () => root.ptitKrpano?.get("xml.scene") || getCurrentScene();
    const restore = (entry) => {
      if (!entry) return;
      if (entry.previous) savedScenePositions[entry.scene] = entry.previous;
      else delete savedScenePositions[entry.scene];
      save();
      if (entry.scene === getCurrentScene()) setDotPosition(positionFor(entry.scene));
      console.log(`[MINIMAP] Đã hoàn tác ${entry.scene}`);
    };

    minimap.querySelector(".campus-minimap__map").addEventListener("click", (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
      const scene = activeScene();
      const target = [Number(x.toFixed(2)), Number(y.toFixed(2))];
      editHistory.push({ scene, previous: savedScenePositions[scene] ? [...savedScenePositions[scene]] : null });
      savedScenePositions[scene] = target;
      save();
      setDotPosition(target);
      console.log(`[MINIMAP] ${scene}: [${target[0]}, ${target[1]}],`);
    });

    editorActions.addEventListener("click", (event) => {
      const action = event.target.closest("button")?.dataset.mapAction;
      if (action === "undo") return restore(editHistory.pop());
      if (action !== "delete") return;
      const scene = activeScene();
      if (!savedScenePositions[scene]) return;
      editHistory.push({ scene, previous: [...savedScenePositions[scene]] });
      delete savedScenePositions[scene];
      save();
      setDotPosition(positionFor(scene));
      console.log(`[MINIMAP] Đã xóa tọa độ đã lưu của ${scene}`);
    });

    document.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
        event.preventDefault();
        restore(editHistory.pop());
      }
    });
  }

  root.PTITMinimapEditor = { readSavedScenePositions, attach };
})(window);
