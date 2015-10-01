myApp.controller('MainController',['$scope', function($scope) {
	$scope.title = 'Top Sellers';
  $scope.promo = 'Promo';
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'http://t3.gstatic.com/images?q=tbn:ANd9GcRyRPvp50pkHqjdXjW0ec0b8FkT-dLYSiHL_-aBi23tcX1oGnFQ',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'http://ecx.images-amazon.com/images/I/414rzVq4eiL._AC_UL320_SR214,320_.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Wings of Fire',
      price: 5,
      pubdate: new Date('2013', '08', '31'),
      cover: 'http://img6a.flixcart.com/image/book/4/6/6/wings-of-fire-an-autobiography-400x400-imadaryu565scaj5.jpeg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Half Girlfriend',
      price: 6,
      pubdate: new Date('2015', '03', '11'),
      cover: 'http://www.jobsalerts.in/wp-content/uploads/2015/03/half-girlfriend.jpeg',
      likes: 0,
      dislikes: 0
    }
  ];
  $scope.plusOne =
    function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = 
    function(index) {
    $scope.products[index].dislikes += 1;
 	};
  
}]);