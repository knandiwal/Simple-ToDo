var indexViewModel = kendo.observable({
	
	todoDataSource: new kendo.data.DataSource(),

	getAll: function() {
		var self = this;
		dataservices.getAll(endpoints.todo)
			.done(function(data) {
				self.todoDataSource.data(data);
		});
	},
	
	onSwipe: function(e) {
		var id = e.sender.element[0].id.substring(10);
		console.log("swiped: " + id);
		dataservices.destroy(endpoints.todo, id);
	},

	onTap: function(e) {
		console.log("tapped");
	}
});