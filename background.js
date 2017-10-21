chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {  
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains 'youtube.com'...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'youtube.com' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});


chrome.pageAction.onClicked.addListener(function(tab) { 
  chrome.tabs.executeScript({file: "js/jquery-3.2.1.min.js"});
  chrome.tabs.executeScript(null, {file: "content.js"});
});