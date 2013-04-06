var newTodoItemViewModel = kendo.observable({

	title: "",
	description: "",
	datecreated: "",
	priority: "Medium",

	saveTodo: function() {
		console.log(this.toJSON());
		dataservices.create(endpoints.todo, this.toJSON())
			.done(function() {
			ToDoApp.Views.refresh();
			ToDoApp.app.navigate("#home");
		});
	}
});