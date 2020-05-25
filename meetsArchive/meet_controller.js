"use strict";

console.log('meet test extension start')
chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
	console.log('ran')
	var icon = 'notmuted.png'
	//default msg
	var message = 'could not locate mute control in Google Meeting'
	const muteButton = document.querySelector("[aria-label='Turn off microphone (⌘ + D)']")
	const unmuteButton = document.querySelector("[aria-label='Turn on microphone (⌘ + D)']")
	console.log(muteButton)
	console.log(unmuteButton)
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