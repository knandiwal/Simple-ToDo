var newTodoItemViewModel = kendo.observable({

	title: "",
	description: "",
	datecreated: "",
	priority: "Medium",

	saveTodo: function() {
		console.log(this.toJSON());
		dataservices.create(endpoints.todo, this.toJSON())
			.done(function() {
			ToDoApp.app.navigate("#home");
		});
	}
});