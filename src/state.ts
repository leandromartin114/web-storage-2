const state = {
	data: {
		tasks: [
			{ title: "Primera tarea", completed: "checked", deleted: false },
			{ title: "Segunda tarea", completed: "checked", deleted: false },
			{ title: "Tercera tarea", completed: "checked", deleted: true },
		],
	},
	listeners: [],
	getState() {
		return this.data;
	},
	setState(newState) {
		this.data = newState;
		for (const cb of this.listeners) {
			cb();
		}
	},
	subscribe(callback: (any) => any) {
		this.listeners.push(callback);
	},
};
export { state };
