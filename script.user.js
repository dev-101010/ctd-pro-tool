// ==UserScript==
// @name         C-TD Pro Tool
// @namespace    https://dev-101010.de/ctdt/script.user.js
// @version      0.13
// @description  C-TD Pro Tool
// @author       dev-101010
// @match        https://ctddev.shimly-dev.de/member/battlefield
// @match        https://www.c-td.de/member/battlefield
// @icon         https://www.google.com/s2/favicons?sz=64&domain=c-td.de
// ==/UserScript==

(function () {
    'use strict'; 

    window.addEventListener("load", () => {

        const battleButtonContainer = document.getElementById("battleButtonContainer");
        if (!battleButtonContainer) return;

        const button = document.createElement("button");
        button.textContent = "Open Pro Tool";
        button.classList.add("btn", "btn-success");
        button.style.margin = "5px";
        button.addEventListener("click", async () => {

            const popupUrl = "https://dev-101010.de/ctdt/popup.html";

            const bust = Date.now();
            const response = await fetch(`${popupUrl}?v=${bust}`, {
                cache: "no-store"
            });
            const html = await response.text();

            const blob = new Blob([html], { type: "text/html" });
            const blobUrl = URL.createObjectURL(blob);

            window.addEventListener("message", (event) => {
                if (event.data === "REQUEST_USER_DATA") {
                    try {
                        event.source?.postMessage({
                            userLanguage,
                            authToken,
                            userToken
                        }, "*");
                    } catch (e) {
                        console.error("Failed to send user data to popup:", e);
                    }
                }
            });

            window.open(blobUrl, "_blank", "width=800,height=400");

        });

        battleButtonContainer.appendChild(button);

    });

})();
