'use strict'

angular.module('app.controllers', [])

.controller('RandomQuoteCtrl', function($scope, QuoteService) {
	QuoteService.random()
		.$promise.then(function(quote) {
			$scope.quote = quote;
		});
})
.controller('SaveQuoteCtrl', function($scope, $state, QuoteService) {
    
    $scope.saveQuote = function() {
        QuoteService.save(
            $scope.quote,
            function(response) {
                $state.go("quote", {});
            },
            function(err) {
                console.log(err);
            }
        );
    };
})
.controller('ReadQuoteByAuthorCtrl', function($scope, $state, 
    $stateParams, $http, myService) { 
    var authorName = $stateParams.authorName;
    console.log(authorName);
    //var data = 'authorName=' + authorName;
   
     myService.getList(authorName)
        .then(function(quote) {
            $scope.quote = quote;
        });

    /*
    
    $http.post('/api/quote/list', data).
        then(successCallback, errorCallback);    
    function successCallback(data){ $scope.quote = data; 
     }
    function errorCallback(err){ console.log(err); }
      
*/
        /*
    $http.post('/api/quote/list', data).
        $promise.then(successCallback, errorCallback);
    
    function successCallback(data){
       $scope.quote = data;
    }
    function errorCallback(err){
         console.log(err);
    }*/

    /*
    QuoteService.list(authorName)
        .$promise.then(function(quote) {
            $scope.quote = quote;
        });
    */
});

/*
app.controller("ReadQuoteByAuthorCtrl", function($scope, $state, $http) {
  $http.get('/api/quote/list?authorName="Douglas Adams"').
    success(function(quote, status, headers, config) {
      $scope.quote = quote;
    }).
    error(function(err) {
      console.log(err);
    });
});*/