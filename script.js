//your JS code here. If required.
document.addEventListener("DomContenedLoaded", () => {
	let statusElement = documnet.getEelmentById("statusE");
	let enterButton = document.getElementById("enterBtn");

	enterButton.addEventListner("Click", () => {
		statusElement.innerHtml() = "<h1>Entered Metaverse</h1>"
	});
});