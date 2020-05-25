captions.onclick = function(element){
	chrome.tabs.query({url:'https://meet.google.com/*'}, tabs=>{
		console.log(tabs[0].id)
		chrome.tabs.sendMessage(tabs[0].id,{a:"a"}, null)
	})
}