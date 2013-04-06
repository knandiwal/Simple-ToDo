var newTodoItemViewModel = kendo.observable({

	title: "",
	description: "",
	datecreated: "",
	priority: "Medium",
	currentItem: {},

	saveTodo: function() {
		console.log(this.toJSON());
		dataservices.create(endpoints.todo, this.toJSON())
			.done(function() {
			ToDoApp.Views.refresh();
			ToDoApp.app.navigate("#home");
		});
	},

	updateItem: function(item) {
		var item = this.get("currentItem").toJSON();
		console.log(item);
		dataservices.update(endpoints.todo, item)
			.done(function() {
			ToDoApp.Views.refresh();
			ToDoApp.app.navigate("#home");
		});
	}
});