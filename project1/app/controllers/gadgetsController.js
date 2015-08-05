app.controller("gadgetsController",
    ['$scope','gadgetService',function($scope,gadgetService){


	function init(){
        $scope.gadgetsUr="templates/electronics.html";

        $scope.gadgets = gadgetService.getGadgets();
        $scope.gadget={};
    }
        $scope.showAddGadget=function(){
            $scope.add=true;
        }
        $scope.addGadget = function(){

            var item = $scope.gadget;
            gadgetService.addGadget(item)
        }
init()
}]);