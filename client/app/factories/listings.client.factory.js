angular.module('listings').factory('Listings', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('https://whispering-refuge-14282.herokuapp.com/api/listings/');
      },

      create: function(listing) {
        return $http.post('https://whispering-refuge-14282.herokuapp.com/api/listings/', listing);
      },

      read: function(id) {
        return $http.get('https://whispering-refuge-14282.herokuapp.com/api/listings/' + id);
      },

      update: function(id, listing) {
        return $http.put('https://whispering-refuge-14282.herokuapp.com/api/listings/' + id, listing);
      },

      delete: function(id) {
        return $http.delete('https://whispering-refuge-14282.herokuapp.com/api/listings/' + id);
      }
    };

    return methods;
  }
]);
