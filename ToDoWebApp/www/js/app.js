var ToDoApp = ToDoApp || {};

$(function() {
	window.onerror = function(errorMsg, url, lineNumber) {
		console.log("Uncaught error: " + errorMsg + " in " + url + ", line " + lineNumber);
	};
	document.addEventListener('deviceready', ToDoApp.deviceready, false);
});

ToDoApp.deviceready = function() {
	ToDoApp.app = new kendo.mobile.Application(document.body, {
		transition: "slide"
	});
};

ToDoApp.show = function() {
	$(document.body).show();
};

ToDoApp.indexPageInit = function(e) {
	indexViewModel.getAll();
};