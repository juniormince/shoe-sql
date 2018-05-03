console.log('js czeck');

var app = angular.module('ShoeApp', []);

app.controller('ShoeController', ['$http', function($http) {
    console.log('ShoeController czeck');

    var self = this;
    self.message = 'msg czeck one two';

    self.getShoe = $http({
        method: 'GET',
        url: '/shoe'
    })
    
    .then(function ()   {
        console.log('get the things');
    })
    .catch(function(error)  {
        console.log('sorry got an error', error);
    });






}]);