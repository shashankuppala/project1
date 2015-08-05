/**
 * Created by shashank on 7/2/2015.
 */
/*arrayBased natation*/
angular.module("myApp").controller("menuController",["$scope",
    function($scope){
           function init(){
             $scope.menuBarUrl="templates/navbar.html";
             $scope.menu= {brand:"Mythri", menuList:[
                 {name:"Home",url:"/home" },{name:"Electronics",url:"/ele"}, {name:"Apparel", url:"/apparel"},
                 {name:"Furniture", url:"/furniture"},{name:"Contact Us", url:"/contactus"}
                 //url:The content that should be dispalyed after the demo.html in the navigation
             ]

             };

           }
     init();
    }
]);