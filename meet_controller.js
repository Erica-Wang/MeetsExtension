"use strict";
console.log("started")
chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
	console.log("ran")
	var captionToggle = document.querySelector('[jsname="r8qRAd"]')
	captionToggle.click()
})