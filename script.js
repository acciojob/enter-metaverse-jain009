//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
	let statusElement = documnet.getEelmentById("status");
	let enterButton = document.getElementById("enterBtn");

	enterButton.addEventListner("click", () => {
		statusElement.innerHtml() = "<p>Entered the Metaverse</p>"
	});
});