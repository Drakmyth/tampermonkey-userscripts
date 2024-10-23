// ==UserScript==
// @name         Remove Highlight Text Fragment
// @namespace    https://github.com/Drakmyth/tampermonkey-userscripts
// @version      0.1
// @author       Drakmyth
// @description  A Tampermonkey userscript to automatically remove highlight fragments from Google/Bing search results
// @homepage     https://github.com/Drakmyth/tampermonkey-userscripts
// @updateURL    https://github.com/Drakmyth/tampermonkey-userscripts/raw/master/remove-highlight-text-fragment.user.js
// @downloadURL  https://github.com/Drakmyth/tampermonkey-userscripts/raw/master/remove-highlight-text-fragment.user.js
// @supportURL   https://github.com/Drakmyth/tampermonkey-userscripts/issues?q=is%3Aopen+is%3Aissue+label%3Aremove-highlight-text-fragment
// @license      MIT
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length <= 0) return;

    for (let entry of navigationEntries) {
        const parsed_url = entry.name.split('#:~:text');
        if (parsed_url.length > 1) {
            console.log(`Highlight fragment found! Redirecting to ${parsed_url[0]}`);
            window.location=parsed_url[0];
        }
    }
})();