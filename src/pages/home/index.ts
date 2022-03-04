import { state } from "../../state";
export function initHomePage(container: Element) {
	const div = document.createElement("div");
	div.innerHTML = `
        <my-title>Mis pendientes</my-title>
        <my-form></my-form>
    `;
	container.appendChild(div);
}
