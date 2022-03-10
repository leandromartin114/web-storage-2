export function initItem() {
	class Item extends HTMLElement {
		shadow = this.attachShadow({ mode: "open" });
		title: string;
		checked: boolean;
		constructor() {
			super();
		}
		connectedCallback() {
			this.title = this.getAttribute("title") || "";
			this.checked = this.hasAttribute("checked");
			this.id = this.getAttribute("id");
			this.render();
		}
		addListeners() {
			const checkEl = this.shadow.querySelector(".checkbox");
			checkEl.addEventListener("click", (e) => {
				const target = e.target as any;
				const myEvent = new CustomEvent("change", {
					detail: {
						id: this.id,
						value: target.checked,
					},
				});
				this.dispatchEvent(myEvent);
			});
			const deleteEl = this.shadow.querySelector(".delete");
			deleteEl.addEventListener("click", () => {
				const myEvent = new CustomEvent("delete", {
					detail: { id: this.id },
				});
				this.dispatchEvent(myEvent);
			});
		}
		render() {
			const div = document.createElement("div");
			div.classList.add("card");
			const style = document.createElement("style");
			div.innerHTML = `
				<h4 class="text ${this.checked ? "checked" : ""}">${this.title}</h4>
				<div class="icons">
					<input type="checkbox" class="checkbox" ${this.checked ? "checked" : ""}>
					<button class="delete">E</button>
				</div>
			`;
			style.innerHTML = `
			.card {
                display: flex;
                border: 4px dashed #9CBBE9;
				border-radius: 4px;
                padding: 10px;
				margin-top: 15px;
				max-width: 352px;
				box-sizing: border-box;
            }
			.checkbox {
				border: 2px solid black;
				border-radius: 4px;
                width: 40px;
                height: 40px;
			}
            .text {
                font-size: 18px;
                margin: 0;
                font-weight: 500;
                width: 100%;
            }
			.checked{
				text-decoration: line-through;
			}
            .delete {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                font-weight: 700;
                border: none;
				border-radius: 4px;
                background-color: #9CBBE9;
                width: 40px;
                height: 40px;
                margin: 0;
                padding: 0;
			}
            .icons{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
            }
			`;
			this.shadow.appendChild(div);
			this.shadow.appendChild(style);
			this.addListeners();
		}
	}
	customElements.define("my-item", Item);
}
