var ListController = function($scope, $location, Todo) {
    $scope.dateCreated = Date.parse($scope.dateCreated);
    $scope.todos = Todo.query();

    $scope.Create = function() {
        $location.path('/new');
    };

    $scope.Delete = function (index) {
        var itemId = this.todo.id;

        Todo.delete({ id: itemId }, function () {
            $scope.todos.splice(index, 1);
        });
    };
};