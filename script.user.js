// ==UserScript==
// @name         CTD Upgrade Tool
// @namespace    https://github.com/dev-101010/ctd-upgrade-tool
// @version      0.1
// @description  CTD Tower upgrade
// @author       dev-101010
// @match        https://www.c-td.de/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=c-td.de
// @resource     popupHtml https://raw.githubusercontent.com/dev-101010/ctd-upgrade-tool/refs/heads/master/popup.html
// @grant        GM_getResourceText
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener("load", () => {

        const gameContainerUpgrade = document.getElementById("gameContainerUpgrade");
        if (gameContainerUpgrade) {
            createButton(gameContainerUpgrade);
            return;
        }

    });

    function createButton(container) {

        // Lade die HTML-Resource
        const htmlText = GM_getResourceText("popupHtml");

        // Erzeuge einen Blob daraus
        const blob = new Blob([htmlText], { type: "text/html" });

        // Erzeuge eine URL, die man mit window.open verwenden kann
        const popupUrl = URL.createObjectURL(blob);

        const button = document.createElement("button");
        button.textContent = "Open Upgrade Tool";
        button.addEventListener("click", () => {
            sessionStorage.setItem("userToken", "sdkjulhf89udhs89fhjs9d8ufh9");
            window.open(popupUrl, "_blank", "width=600,height=400");
        });
        container.appendChild(button);
    }

})();