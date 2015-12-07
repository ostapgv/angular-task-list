app.factory('Tasks', function () {

  function getTasks() {
    var tasks = {};
    var keys = Object.keys(localStorage);
    var i = keys.length;
    while ( i-- ) {
      archive[ keys[i] ] = localStorage.getItem( keys[i] );
    }
    return tasks;
  }

  // Test data initialization
  // TODO replace to the local storage impl
  return [
    {
      'id': 'de772c9e-9d18-1c96-77ac-7bc52d92a2c9',
      'title': 'Create tests for tests',
      'priority': 10,
      'endDate': new Date(2013, 9, 22),
      'isActive': true,
      'description': 'Create tests for the each test recursively and endless'
    },
    {
      'id': 'f4e7920a-bfac-8c15-23c1-49786b661e0a',
      'title': 'Make the cofee',
      'priority': 3,
      'endDate': new Date(2013, 9, 10),
      'isActive': false,
      'description': 'I\'m not so alive without it'
    },
    {
      'id': 'f3e7520a-3fac-8c15-23c1-49786b661e0g',
      'title': 'Make a tea',
      'priority': 2,
      'endDate': new Date(2013, 9, 11),
      'isActive': false,
      'description': 'I\'m not so alive without it'
    }
  ];
});