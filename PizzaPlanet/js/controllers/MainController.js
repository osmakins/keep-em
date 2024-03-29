app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name:'Bruschetta',
      description:'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];
  $scope.mains = [ 
  {
      name: 'Pizza',
      description: 'tomatoes, basil, balsmaic glaze.',
      price: 2.95
    },
    {
      name: 'Kebab',
      description: 'marinara sauce.',
      price: 9.95
    },
    {
      name:'Kana',
      description:'Grilled bread',
      price: 7.95
    }
  ];
  $scope.extras = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name:'Bruschetta',
      description:'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];
}]);