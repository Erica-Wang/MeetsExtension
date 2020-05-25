debugger;
let changeColor = document.getElementById('changeColor');
console.log('test');
chrome.storage.sync.get('color',function(data){
	changeColor.style.backgroundColor = data.color;
	changeColor.setAttribute('value',data.color);
});
changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    	let code = 'if(document.body.style.backgroundColor == "rgb(255, 255, 255)"){document.body.style.backgroundColor = "' + color + '";}else{document.body.style.backgroundColor = "#FFFFFF";}';
		chrome.tabs.executeScript(
        	tabs[0].id,
        	{code: code});
		chrome.tabs.executeScript(
        	tabs[0].id,
        	{code: "console.log(document.body.style.backgroundColor);"});
		/*
    	if(document.body.style.backgroundColor==color){
    		chrome.tabs.executeScript(
        	tabs[0].id,
        	{code: 'document.body.style.backgroundColor = "#FFFFFF";'});
    	}
    	else{
      		chrome.tabs.executeScript(
        	tabs[0].id,
        	{code: 'document.body.style.backgroundColor = "' + color + '";'});
    	}*/
    });
};