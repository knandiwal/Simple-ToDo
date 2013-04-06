var indexViewModel = kendo.observable({

	todoDataSource: new kendo.data.DataSource(),

	getAll: function() {
		var self = this;
		dataservices.getAll(endpoints.todo)
			.done(function(data) {
			self.todoDataSource.data(data);
		})
	},

	removeTodo: function(element) {
		var id = element.data.id;
		console.log("removing: " + id);
		dataservices.destroy(endpoints.todo, id);
		ToDoApp.Views.refresh();
	},

	onTap: function(e) {
		console.log("tapped");
	},

	addItem: function(item) {
		var self = this;
		console.log("Adding item: " + item.toJSON());
		self.todoDataSource.add(item);
	}
});