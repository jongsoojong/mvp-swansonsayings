var ron = angular.module('ron', []);

ron.controller('ronController', function(QuoteMaker){
  var vm = this; //this is $scope.
  vm.line = ''
  vm.ronName = '- Ron Swanson'


  vm.quotes = function() {
    QuoteMaker.getQuote()
    .then(function(res){
      vm.line = res.data[0]
      console.log(res.data[0])
    })
    .catch(function(err){
      throw err;
    })
  }

})

ron.factory('QuoteMaker', function($http){

  let getQuote = function() {
      return $http({
        method: 'GET',
        url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
      })
  }
  return {
    getQuote: getQuote
  }
})
