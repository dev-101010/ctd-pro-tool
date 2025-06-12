// ==UserScript==
// @name         C-TD Pro Tool (beta)
// @namespace    https://dev-101010.de/ctdpt/script.user.js
// @version      0.18
// @description  C-TD Pro Tool (beta)
// @author       dev-101010
// @match        https://ctddev.shimly-dev.de/member/battlefield
// @match        https://www.c-td.de/member/battlefield
// @icon         https://www.google.com/s2/favicons?sz=64&domain=c-td.de
// ==/UserScript==

(function () {
    'use strict'; 

    window.addEventListener("load", () => {

        window.addEventListener("message", (event) => {
            if (event.data === "REQUEST_USER_DATA") {
                if (event.source && event.origin === location.origin) {
                    try {
                        event.source.postMessage({
                            userLanguage,
                            authToken,
                            userToken
                        }, location.origin);
                    } catch (e) {
                        console.error("Failed to send data via postMessage:", e);
                    }
                } else {
                    console.warn("Blocked message request from unknown origin:", event.origin);
                }
            }
        });

        const battleButtonContainer = document.getElementById("battleButtonContainer");
        if (!battleButtonContainer) return;

        const button = document.createElement("button");
        button.textContent = (userLanguage === "de" ? "Pro Tool öffnen" : "Open Pro Tool") + " (beta)";
        button.classList.add("btn", "btn-success");
        button.style.margin = "5px";
        button.addEventListener("click", async () => {

            const popupUrl = "https://dev-101010.de/ctdpt/popup.html";

            const bust = Date.now();
            const response = await fetch(`${popupUrl}?v=${bust}`, {
                cache: "no-store"
            });
            const html = await response.text();

            const blob = new Blob([html], { type: "text/html" });
            const blobUrl = URL.createObjectURL(blob);

            window.open(blobUrl, "_blank", "width=800,height=400");

        });

        battleButtonContainer.appendChild(button);

    });

})();
