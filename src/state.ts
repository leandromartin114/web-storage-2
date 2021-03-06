const state = {
	data: {
		tasks: [
			// { id: 1, title: "Primera tarea", completed: true, deleted: false },
			// { id: 2, title: "Segunda tarea", completed: false, deleted: false },
			// { id: 3, title: "Tercera tarea", completed: false, deleted: true },
		],
	},
	listeners: [],
	initState() {
		const savedState = localStorage.getItem("saved-state");
		const savedStateParsed = JSON.parse(savedState);
		const pilotState = {
			tasks: [
				{ id: 0, title: "Tarea piloto", completed: false, deleted: true },
			],
		};
		if (savedStateParsed) {
			console.log("hay state");
			this.setState(savedStateParsed);
		} else {
			console.log("no hay state");
			this.setState(pilotState);
		}
	},

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
		const stateString = JSON.stringify(newState);
		localStorage.setItem("saved-state", stateString);
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
		const foundTask = currentState.tasks.find((t) => t.id == id);
		foundTask.completed = value;
		this.setState(currentState);
	},
	deleteTasks(id) {
		const currentState = this.getState();
		const foundTask = currentState.tasks.find((t) => t.id == id);
		foundTask.deleted = true;
		this.setState(currentState);
	},
};
export { state };
