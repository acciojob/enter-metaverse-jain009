//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
	let statusElement = documnet.getEelmentById("status");
	let enterButton = document.getElementById("enterBtn");

	enterButton.addEventListner("lick", () => {
		statusElement.innerHtml() = "<h1>Entered the Metaverse</h1>"
	});
});