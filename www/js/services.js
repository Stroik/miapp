angular.module('muniapp.services', [])

.factory('Posts', function($http, $q, $localStorage) {

  return({
    all: all,
    one: one,
    getTramites: getTramites,
    getTramite: getTramite
  })
  
  function all(){
    var req = $http({
      method: "GET",
      url: "http://www.mipaginaweb.com.ar/muniapp/?json=1",
      params: {
        action: "GET"
      }
    });

    return(req.then(handleSuccess, handleError));    
  }

  function one(postSlug){
    var req = $http({
      method: "GET",
      url: "http://mipaginaweb.com.ar/muniapp/?json=get_post&slug="+postSlug,
      params:{
        action:"GET"
      }
    });

    return(req.then(handleSuccess, handleError));
  }

  function getTramites(){
    var req = $http({ 
      method: "GET",
      url: "http://mipaginaweb.com.ar/muniapp/api/get_posts/?post_type=service",
      params: { 
        action: "GET"
      }
    });
    return(req.then(handleSuccess, handleError));
  }

  function getTramite(postSlug){
    var req = $http({ 
      method: "GET",
      url: "http://mipaginaweb.com.ar/muniapp/api/get_post/?post_type=service&slug="+postSlug,
      params: { 
        action: "GET"
      }
    });
    return(req.then(handleSuccess, handleError));
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

});
