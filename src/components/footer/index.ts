export function initFooter() {
	class Footer extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		shadow = this.attachShadow({ mode: "open" });
		render() {
			this.shadow.innerHTML = `
            <footer class="footer"></footer>
            <style>
            .footer{
                height: 230px;
                background-color: #FFF599;
            }
            </style>
            `;
		}
	}
	customElements.define("my-footer", Footer);
}
