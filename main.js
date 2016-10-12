var ron = angular.module('ron', []);

ron.controller('ronController', function(QuoteMaker){
  var vm = this; //this is $scope.
  vm.line = ''
  vm.ronName = '- Ron Swanson'


  vm.quotes = function() {
    console.log('inside qoutes')
    QuoteMaker.getQuote()
    .then(function(res){
      vm.line = res.data[0]
      console.log(res.data[0])
    })
    .catch(function(err){
      throw err;
    })
    QuoteMaker.getCounter();
  }

})

ron.factory('QuoteMaker', function($http){

  let getQuote = function() {
      return $http({
        method: 'GET',
        url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
      })
  }
  let getCounter = function(){
    console.log("I AM HITTING IT!!")
    return $http({
      method: 'GET',
      url:'/api/click'
    })
  }
  return {
    getQuote: getQuote,
    getCounter: getCounter
  }
})
