/**
 * Created by General Genius on 2017/08/24.
 */
angular.module('myApp', []).controller('namesCtrl', function($scope){
    $scope.names = [
        {name:'Jani', country:'Norway'},
        {name:'Carl', country:'Norway'},
        {name:'Margareth', country:'Norway'},
        {name:'Hege', country:'Norway'},
        {name:'Joe', country:'Norway'},
        {name:'Gustav', country:'Norway'},
        {name:'Birgit', country:'Norway'},
        {name:'Mary', country:'Norway'},
        {name:'Kai', country:'Norway'},
    ];
});

angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
    ];
});