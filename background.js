
chrome.runtime.onInstalled.addListener(function(){
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    	chrome.declarativeContent.onPageChanged.addRules([{
    		conditions: [new chrome.declarativeContent.PageStateMatcher({
    		pageUrl: {urlMatches: 'meet.google.com/*'},
     		})
    		],
    		actions: [new chrome.declarativeContent.ShowPageAction()]
    	}]);
        console.log("ran")

    });
});