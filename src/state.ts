const state = {
	data: {
		tasks: [
			{ id: 1, title: "Primera tarea", completed: true, deleted: false },
			{ id: 2, title: "Segunda tarea", completed: false, deleted: false },
			{ id: 3, title: "Tercera tarea", completed: false, deleted: true },
		],
	},
	listeners: [],
	initState() {},

	getState() {
		return this.data;
	},
	getEnabledTasks() {
		const tasks = this.getState().tasks;
		return tasks.filter((t) => {
			return t.deleted == false;
		});
	},
	setState(newState) {
		this.data = newState;
		for (const cb of this.listeners) {
			cb(newState);
		}
		// const stateString = JSON.stringify(newState);
		// localStorage.setItem("saved-state", stateString);
	},
	subscribe(callback: (any) => any) {
		this.listeners.push(callback);
	},
	addTask(task) {
		const currentState = this.getState();
		currentState.tasks.push(task);
		this.setState(currentState);
	},
	changeCompleted(id, value) {
		const currentState = this.getState();
		const foundedTask = currentState.tasks.find((t) => t.id == id);
		foundedTask.completed = value;
		this.setState(currentState);
	},
};
export { state };
