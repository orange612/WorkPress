var app = angular.module("app", []);

app.controller('allWorks', ['$scope', function($scope) {
    $scope.works = [
        {work:'index.php'},
		{work:'style.css'},
		/*{work:'header.php'},
		{work:'footer.php'},
		{work:'single.php'},
		{work:'page.php'},
		{work:'404.php'},*/
		{work:'Código Analytics'} ];
        console.log($scope.works);

	$scope.addTask = function(){
		alert("aaaaa")
        $scope.works.push({work:'index.phpaaa'});
    };

}]);