"use strict";


chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
	var icon = 'notmuted.png'
	//default msg
	var message = 'could not locate mute control in Google Meeting'
	const muteButton = document.queySelector("[area-label='Turn off microphone']")
	const unmuteButton = document.queySelector("[area-label='Turn on microphone']")

	const mute = () =>{
		const btn = muteButton
		if(btn!=null){
			btn.click()
			message = "microphone is off"
			icon = 'muted.png'
			sendResponse({
				notification:{
					type: 'basic',
					iconUrl: icon,
					title: message,
					message: ""
				}
			})
		}
	}
	const unmute = () =>{
		const btn = unmuteButton
		if(btn!=null){
			btn.click()
			message = "microphone is on"
			icon = 'notmuted.png'
			sendResponse({
				notification:{
					type: 'basic',
					iconUrl: icon,
					title: message,
					message: ""
				}
			})
		}
	}

	if(request.command=='toggle'){
		if(muteButton!==null){
			mute()
		}else{
			unmute()
		}
	}

})