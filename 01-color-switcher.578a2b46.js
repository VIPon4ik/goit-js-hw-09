!function(){"use strict";var t,e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");a.disabled=!0,e.addEventListener("click",(function(){a.disabled=!1,e.disabled=!0,t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3)})),a.addEventListener("click",(function(){e.disabled=!1,a.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.578a2b46.js.map
