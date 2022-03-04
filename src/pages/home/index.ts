import { state } from "../../state";
export function initHomePage(container: Element) {
	const div = document.createElement("div");
	div.innerHTML = `
        <my-text tag="h1">Mis pendientes</my-text>
        <my-form></my-form>
    `;
	container.appendChild(div);
}
