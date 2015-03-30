angular.module('muniapp.controllers', [])

.controller('InicioCtrl', function($scope, $ionicSideMenuDelegate, Posts, $localStorage) {
	$scope.$storage = $localStorage;
	function setPosts(getPosts){
		$localStorage.posts = $scope.posts = getPosts;
	}
	Posts.all().then(function(data){
		setPosts(data.posts);
	});
	$scope.myActiveSlide = false;

})

.controller('PostsCtrl', function($scope, Posts, $localStorage, $stateParams, $rootScope) {
	$scope.$storage = $localStorage;
	function setPosts(getPosts){
		$localStorage.posts = $scope.posts = getPosts;
	}
	Posts.all().then(function(data){
		setPosts(data.posts);
	});
})

.controller('PostDetailCtrl', function($scope, $stateParams, Posts, $localStorage, $filter, $sce) {
	Posts.one($stateParams.postSlug).then(function(data){
		setPost(data.post);	
	});
	
	function setPost(elPost){
		$localStorage.post = $scope.post = elPost;
		if($.isEmptyObject($localStorage.post.custom_fields)){
			$scope.player = $sce.trustAsHtml('<iframe width="560" height="315" src="https://www.youtube.com/embed/DjxOJnDaUJM" frameborder="0" allowfullscreen></iframe>');
		}else{
			$scope.player = $sce.trustAsHtml($localStorage.post.custom_fields.video[0]);
		}
	}
})

.controller('CommentCtrl', function($scope, $stateParams, Posts, $localStorage) {
  $scope.$storage = $localStorage;
  function setComment(comments){
  	$localStorage.comments = $scope.comments = comments;
  }
  Posts.one($stateParams.postSlug).then(function(data){
  	setComment(data.post);
  	console.log(data.post);
  })
})

.controller('TramitesCtrl', function($scope, $stateParams, Posts, $localStorage) {
	$scope.$storage = $localStorage;
 	function setTramites(tramites){
  		$localStorage.tramites = $scope.tramites = tramites;
  	}
  	Posts.getTramites().then(function(data){
  		setTramites(data.posts);
  		console.log(data.posts);
  	})
})

.controller('TramiteDetailCtrl', function($scope, $stateParams, Posts, $localStorage){
	$scope.$storage = $localStorage;
	function setTramite(tramite){ 
		$localStorage.tramite = $scope.tramite = tramite;
	}
	Posts.getTramite($stateParams.postSlug).then(function(data){ 
		setTramite(data.post);
		console.log(data.post);
	})
})

.controller('TelefonosCtrl', function($scope) {
$scope.telefonos = 
[
	{nombre: "Hospital de Ituzaingo", numero: "0-800-999-1999"},
	{nombre: "Emergencias médicas (gratuitas)", numero: "4458-4300"},
	{nombre: "Cuartel central Bomberos", numero: "4621-2222"},
	{nombre: "Municipalidad de Ituzaingo", numero: "5068-9300"},
	{nombre: "Delegación Norte", numero: "4621-0614"},
	{nombre: "Delegación Sur", numero: "4929-2344"},
	{nombre: "Reclamos", numero: "0-800-333-3330"},
	{nombre: "Rentas Ituzaingo", numero: "5068-9311"},
	{nombre: "Comisaria 1° Ituzaingo (1)", numero: "4623-0842"},
	{nombre: "Comisaria 1° Ituzaingo (2)", numero: "4623-0795"},
	{nombre: "Comisaria 2da Villa Ariza (1)", numero: "4624-4941"},
	{nombre: "Comisaria 2da Villa Ariza (2)", numero: "4623-4423"},
	{nombre: "Comisaría 3° Udaondo (1)", numero: "4621-8196"},
	{nombre: "Comisaría 3° Udaondo (2)", numero: "4621-0444"},
	{nombre: "Comisaría 4° San Alberto (1)", numero: "4481-3299"},
	{nombre: "Comisaría 4° San Alberto (2)", numero: "4621-0006"},
	{nombre: "Patrulla Bonaerense", numero: "4661-5812"},
	{nombre: "Registro Civil Centro", numero: "4624-5788"},
	{nombre: "Registro Civil Udaondo", numero: "4621-9581"},
	{nombre: "Adicciones CPA", numero: "4458-2612"},
	{nombre: "Direccion de empleo (1)", numero: "0800-666-1848"},
	{nombre: "Direccion de empleo (2)", numero: "5068-0107"},
	{nombre: "Direccion de empleo (3)", numero: "5068-0108"},
	{nombre: "Defensa Civil 103", numero: "4458-1293"}
];
});
