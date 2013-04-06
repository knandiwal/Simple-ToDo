ToDoApp.Views = ToDoApp.Views || {};

ToDoApp.Views.refresh = function(e) {
	indexViewModel.getAll();
}

ToDoApp.Views.swiped = function(e) {
	var id = e.sender.element[0].id.substring(10);
	if (e.direction === "right") {
		$("#delete-" + id).css('display', 'block');
	} else {
		$("#delete-" + id).css('display', 'none');
	}
};