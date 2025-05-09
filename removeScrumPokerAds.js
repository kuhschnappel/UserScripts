// ==UserScript==
// @name         Remove Ads from ScrumPoker
// @namespace    https://github.com/kuhschnappel/UserScripts
// @version      Alpha-v1
// @author       Mike Zimmer
// @match        https://www.scrumpoker-online.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scrumpoker-online.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        document.querySelectorAll('.add-container-right, .ez-sidebar-wall, .add-container-middle, ins, .ez-video-wrap').forEach((element) => {
            element.remove();
        });
    }, 2000);
})();
