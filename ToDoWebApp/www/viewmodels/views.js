ToDoApp.Views = ToDoApp.Views || {};

ToDoApp.Views.refresh = function(e) {
	indexViewModel.getAll();
};

ToDoApp.Views.swiped = function(e) {
	var id = e.sender.element[0].id.substring(10);
	if (e.direction === "right") {
		$("#delete-" + id).css('display', 'block');
	} else {
		$("#delete-" + id).css('display', 'none');
	}
};

ToDoApp.Views.edit = function(e) {
	var item = indexViewModel.todoDataSource.get(e.view.params.id);
	newTodoItemViewModel.set("currentItem", item);
};

ToDoApp.Views.tapped = function(e) {
	var url = e.touch.target.data("url");
	ToDoApp.app.navigate(url);
};