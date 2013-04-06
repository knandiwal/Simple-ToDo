var indexViewModel = kendo.observable({

	todoDataSource: new kendo.data.DataSource(),
	currentItem: {},

	getAll: function() {
		var self = this;
		dataservices.getAll(endpoints.todo)
			.done(function(data) {
			self.todoDataSource.data(data);
			console.log(data);
		})
	},

	removeItem: function(element) {
		var id = element.data.id;
		console.log("removing: " + id);
		dataservices.destroy(endpoints.todo, id);
		ToDoApp.Views.refresh();
	},

	addItem: function(item) {
		var self = this;
		console.log("Adding item: " + item.toJSON());
		self.todoDataSource.add(item);
	}
});