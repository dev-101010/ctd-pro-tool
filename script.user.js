// ==UserScript==
// @name         CTD Upgrade Tool
// @namespace    https://github.com/dev-101010/ctd-upgrade-tool
// @version      0.1
// @description  CTD Tower upgrade
// @author       dev-101010
// @match        https://ctddev.shimly-dev.de/member/battlefield
// @icon         https://www.google.com/s2/favicons?sz=64&domain=c-td.de
// @resource     popupHtml https://raw.githubusercontent.com/dev-101010/ctd-upgrade-tool/refs/heads/master/popup.html
// @grant        GM_getResourceText
// ==/UserScript==

(function () {
    'use strict'; 

    window.addEventListener("load", async () => {

        const gameContainerUpgrade = document.getElementById("gameContainerUpgrade");
        if (!gameContainerUpgrade) return;
        await createButton(gameContainerUpgrade);

    });

    async function createButton(container) {

        const popupUrl = "https://raw.githubusercontent.com/dev-101010/ctd-upgrade-tool/refs/heads/master/popup.html";

        const response = await fetch(popupUrl);
        const html = await response.text();

        const blob = new Blob([html], { type: "text/html" });
        const blobUrl = URL.createObjectURL(blob);

        const button = document.createElement("button");
        button.textContent = "Open Upgrade Tool";
        button.classList.add("btn", "btn-success");
        button.style.margin = "5px";
        button.addEventListener("click", () => {
            sessionStorage.setItem("userToken", userToken);
            sessionStorage.setItem("authToken", authToken);
            window.open(blobUrl, "_blank", "width=800,height=400");
        });
        container.appendChild(button);
    }

})();
