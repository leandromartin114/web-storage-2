export function initTitle() {
	class Title extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		text = this.textContent;
		render() {
			this.innerHTML = `
            <h1></h1>
            `;
			this.style.fontSize = "34px";
			this.style.fontWeight = "700";
			this.style.display = "flex";
			this.style.alignItems = "center";
			this.textContent = this.text;
		}
	}
	customElements.define("my-title", Title);
}
