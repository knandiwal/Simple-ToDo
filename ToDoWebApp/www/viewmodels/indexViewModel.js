var indexViewModel = kendo.observable({
	
	todoDataSource: new kendo.data.DataSource(),

	getAll: function() {
		var self = this;
		dataservices.getAll(endpoints.todo)
			.done(function(data) {
				self.todoDataSource.data(data);
		});
	},

	delete: function(element) {
		dataservices.destroy(endpoints.todo, element.Id);
	}
});