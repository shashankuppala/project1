/**
 * Created by shashank on 7/20/2015.
 */
app.directive('customGrid',[function(){
    return{

        restrict :"A,E",
        templateUrl:"templates/gridTemplate.html",
        controller:function($scope){
            $scope.headers=["S.no","Type","brand","Price"];
            $scope.data=[{name:"car",brand:"Audi",price:"40,0000"},
                         {name:"car",brand:"BMW",price:"40,000"},
                         {name:"Bike",brand:"duke",price:"10,000"},
                         {name:"Watch",brand:"fossil",price:"300"}]
        }
    };
}]);
