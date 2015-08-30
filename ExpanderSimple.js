// var app = angular.module('app',[]);
// // function demoController($scope){
// //     $scope.color = {
// //         color1:#fff,
// //         color2:#000
// //     }
// // }
// // app.Controller('demoController',function($scope){
// //     $scope.demoController = function(){
// //     $scope.color = {
// //         color1:#fff,
// //         color2:#000
// //     }       
// //     }
// // })  
// app.directive('hello', function() {
//   return {
//     restrict: 'AE',
//     replace: true,
//     controller:['$scope','#element',function($scope,$element){
//         $scope:{
//             color1:#fff,
//             color2:#000    
//         }
//     }],
//     template: '<button ng-model="$scope" style="background-color:{{color}}" value="确认"></button>',
//     link: function($scope, $elem, $attrs) {
//       $elem.bind('click', function() {
//         $elem.css('background-color', 'black');
//         $scope.$apply(function() {0
//           scope.color = "black";
//         });
//       });
//     }
//   };
// });
var expanderModule=angular.module('expanderModule', [])
expanderModule.directive('expander', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            title : '=expanderTitle'
        },
        template : '<div>'
                 + '<div class="title" ng-click="toggle()">{{title}}</div>'
                 + '<div class="body" ng-show="showMe" ng-transclude></div>'
                 + '</div>',
        link : function(scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        }
    }
});
expanderModule.controller('SomeController',function($scope) {
    $scope.title = '点击展开';
    $scope.text = '这里是内部的内容。';
});