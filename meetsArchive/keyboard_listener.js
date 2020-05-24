chrome.commands.onCommand.addListener(command =>{
	//open all tabs with meets open
	chrome.tabs.query({url:'https://meet.google.com/*'}, tabs=>{
		tabs.forEach(tab=>{
			const responseHandler = (response)=>{
				chrome.notifications.create(undefined, response.notification, 
					function(notificationId){}
				)
			}
			chrome.tabs.sendMessage(tab.id,{command: command}, responseHandler)
		})
	})
})