angular.module('muniapp.services', ['ngLodash'])

.factory('Posts', function($http, $q, $localStorage, lodash) {

  return({
    all: all,
    one: one,
    getTramites: getTramites,
    getTramite: getTramite,
    oneL: oneL
  })
  
  function all(){
    var req = $http({
      method: "GET",
      url: "http://entremaresweb.com/miapp/?json=1",
      params: {
        action: "GET"
      }
    });

    return(req.then(handleSuccess, handleError));    
  }
  function oneL(slug){
    var q = $q.defer();
      var posts = $localStorage.posts
      var post = _.first(_.filter(posts, { 'slug' : slug }));
      q.resolve(post);

    return q.promise;
  }

  function one(postSlug){
    var req = $http({
      method: "GET",
      url: "http://entremaresweb.com/miapp/?json=get_post&slug="+postSlug,
      params:{
        action:"GET"
      }
    });
    return(req.then(handleSuccess, handleError));
  }

  function getTramites(){
    var req = $http({ 
      method: "GET",
      url: "http://entremaresweb.com/miapp/?json=get_posts&post_type=service",
      params: { 
        action: "GET"
      }
    });
    return(req.then(handleSuccess, handleError));
  }

  function getTramite(slug){
    var q = $q.defer();
    var services = $localStorage.tramites;
    var service = _.first(_.filter(services, { 'slug' : slug }));
    q.resolve(service);

    return q.promise;
  }

  function handleError(response) {
    if(! angular.isObject( response.data ) || ! response.data.message){
      return($q.reject("Estas fumando cualquier mierda." ));
    }
    return($q.reject(response.data.message));
  }
  
  function handleSuccess(response){
    return(response.data);
  }

}).service('localStorageService', function () {
  return{
    getJSON: function(name) {
      return JSON.parse(localStorage.getItem(name));
    },
    setJSON: function(name, value) {
      localStorage.setItem(name, JSON.stringify(value));
    },
    getString: function(name) {
      return localStorage.getItem(name);
    },
    setString: function(name, value) {
      localStorage.setItem(name, value);
    },
    clear: function(){
      localStorage.clear();
    }
  };
});