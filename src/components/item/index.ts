import { state } from "../../state";
export function initItem() {
	class Item extends HTMLElement {
		constructor() {
			super();
		}
		shadow = this.attachShadow({ mode: "open" });
	}
	customElements.define("my-item", Item);
}
