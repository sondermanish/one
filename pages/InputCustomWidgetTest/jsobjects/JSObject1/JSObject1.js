export default {
		// Example: Handle button click event
const buttonElement = document.getElementById("requestChangeButton");
buttonElement.addEventListener("click", () => {
   appsmith.triggerEvent("onRequestchange");
});
}