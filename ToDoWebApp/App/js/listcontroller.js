var ListController = function ($scope, Todo) {
    $scope.dateCreated = Date.parse($scope.dateCreated);
    $scope.todos = Todo.query();
};