import { state } from "../../state";
export function initHomePage(container: Element) {
	const div = document.createElement("div");
	div.innerHTML = `
		<my-text tag="h1">Mis pendientes</my-text>
		<my-form></my-form>
		<ul class="list"></ul>
	`;
	const list = div.querySelector(".list");
	const style = document.createElement("style");
	style.innerHTML = `
			.list{
				margin: 0;
				padding: 0;
			}
	`;
	container.firstChild?.remove();
	container.appendChild(div);
	container.appendChild(style);
	function render(items) {
		list.innerHTML = "";

		for (const i of items) {
			if (items.length == 1 && i.title == "Tarea piloto") {
				list.innerHTML = `<my-text tag="h3">Sin pendientes</my-text>`;
			} else {
				const myItem = document.createElement("my-item");
				myItem.setAttribute("title", i.title);
				myItem.setAttribute("id", i.id);
				if (i.completed) {
					myItem.setAttribute("checked", "true");
				}
				myItem.addEventListener("change", (e: any) => {
					state.changeCompleted(e.detail.id, e.detail.value);
				});
				myItem.addEventListener("delete", (e: any) => {
					state.deleteTasks(e.detail.id);
				});
				list.appendChild(myItem);
			}
		}

		//LOGARITMO ORIGINAL PARA DIBUJAR UN "my-item" DENTRO DE LA PÁGINA
		// const listOfTasks = tasks.map(
		// 	(t) =>
		// 		`<my-item title="${t.title}" ${
		// 			t.completed ? "checked" : ""
		// 		} ></my-item>`
		// );
		// list.innerHTML = listOfTasks.join("");
	}
	state.subscribe(() => {
		render(state.getEnabledTasks());
	});
	render(state.getEnabledTasks());
}
