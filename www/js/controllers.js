angular.module('muniapp.controllers', [])

.controller('InicioCtrl', function($scope) {
	$scope.test = [{name: "Carlitos"},{name: "Leo"},{name: "Soruyo"},{name: "Marcos"}];
})

.controller('PostsCtrl', function($scope, Posts, $localStorage, $stateParams) {
	$scope.$storage = $localStorage;
	function setPosts(getPosts){
		$localStorage.posts = $scope.posts = getPosts;
	}

	Posts.all().then(function(data){
		setPosts(data.posts);
	});

		
})

.controller('PostDetailCtrl', function($scope, $stateParams, Posts, $localStorage, $filter) {
	$scope.$storage = $localStorage;
	function setPost(elPost){
		$localStorage.last_post = $scope.post = elPost;
	}

	Posts.one($stateParams.postSlug).then(function(data){
		setPost(data);
	});


})

.controller('TramitesCtrl', function($scope, $stateParams, Posts, $localStorage) {
  $scope.$storage = $localStorage;
})

.controller('TelefonosCtrl', function($scope) {
$scope.test = [{name: "carlitos"},{name: "Leo"},{name: "Soruyo"},{name: "Marcos"}];
});
