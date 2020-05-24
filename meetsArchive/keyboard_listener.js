
chrome.commands.onCommand.addListener(command =>{
	//open all tabs with meets open
	console.log("started");
	chrome.tabs.query({url:'https://meet.google.com/*'}, tabs=>{
		tabs.forEach(tab=>{
			console.log(command)
			const responseHandler = (response)=>{
				chrome.notifications.create(undefined, "response.notification", 
					function(notificationId){}
				)
			}
			chrome.tabs.sendMessage(tab.id,{command: command}, null)
		})
	})
})