!function(){var t={bodyEl:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),btnStartActive:document.querySelector("button[data-start].btn-active"),btnStopActive:document.querySelector("button[data-stop].btn-active")},e=null;t.btnStart.addEventListener("click",n),t.btnStop.addEventListener("click",o),t.btnStartActive.addEventListener("mouseenter",r),t.btnStopActive.addEventListener("mouseenter",a);function n(){t.btnStart.disabled=!0,t.btnStop.disabled=!1,t.btnStart.classList.remove("btn-active"),t.btnStop.classList.add("btn-active"),e=setInterval((function(){var e;e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.bodyEl.style.backgroundColor=e}),1e3),t.btnStart.removeEventListener("click",n),t.btnStop.addEventListener("click",o),t.btnStartActive.removeEventListener("mouseenter",r),t.btnStopActive.addEventListener("mouseenter",a)}function o(){t.btnStop.disabled=!0,t.btnStart.disabled=!1,t.btnStop.classList.remove("btn-active"),t.btnStart.classList.add("btn-active"),clearInterval(e),t.btnStart.addEventListener("click",n),t.btnStop.removeEventListener("click",o),t.btnStopActive.removeEventListener("mouseenter",a),t.btnStartActive.addEventListener("mouseenter",r)}function r(){t.btnStartActive.textContent="Слава Україні!",t.btnStopActive.textContent="Stop"}function a(){t.btnStopActive.textContent="Смерть москалям!",t.btnStartActive.textContent="Start"}}();
//# sourceMappingURL=01-color-switcher.4afbeaef.js.map