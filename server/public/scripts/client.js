console.log('js czeck');

var app = angular.module('ShoeApp', []);

app.controller('ShoeController', ['$http', function ($http) {
    console.log('ShoeController czeck');

    var self = this;
    //self.message = 'msg czeck one two';

    self.shoeList = {
        list: []
    };

    self.shoeName;
    self.shoeCost;


    self.getShoe = function () {
        $http({
            method: 'GET',
            url: '/shoe'
        })
            .then(function (response) {
                self.shoeList.list = [];
                console.log('get the things', response.data);
                    self.shoeList.list = response.data
                    
            })
            .catch(function (error) {
                console.log('sorry, get error', error);
            });
    }

    self.newShoe = function () {
        $http({
            method: 'POST',
            url: '/shoe',
            data: {
                name: self.shoeName,
                cost: self.shoeCost,
            }
        })
            .then(function (response) {
                console.log('post the things', response.data);

            })
            .catch(function (error) {
                console.log('sorry, post error', error);
            });
    }






}]);