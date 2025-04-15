//your JS code here. If required.
function getTextMessage() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello, world!");
		}, 1000);
	});
}

getTextMessage().then((message) => {
	document.getElementById("output").textContent = message;
});
