const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d;e.disabled=!0,t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0,d=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,e.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.094562e8.js.map
