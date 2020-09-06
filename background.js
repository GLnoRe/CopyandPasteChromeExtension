// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function () {
    // Create one test item for each context type.
    var contexts = ["page", "selection", "link", "editable", "image"];
    for (var i = 0; i < contexts.length; i++) {
        var context = contexts[i];
        var title = "Copy and Paste";
        var id = chrome.contextMenus.create({
            "title": title, "contexts": [context],
            "id": "context" + context,
            "onclick": PasteOnClick
        });
        console.log("'" + context + "' item:" + id);
    }
});



document.addEventListener('click', function () {
    console.log("editable: " + JSON.stringify(info.editable));
});





function PasteOnClick(info, tab) {
    if (tab.selected) {
        var copydata = JSON.stringify(info.selectionText)
    }
    else
    {
        var copydata = null
    } 
   


        //chrome.storage.local.get('KEY', function (items) {
        //use the retrieved data with items.KEY
        // });
        console.log("item " + info.menuItemId + " was clicked");
        console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    console.log("editable: " + JSON.stringify(info.editable));
        console.log("Selection" + copydata)
};