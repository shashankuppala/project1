/**
 * Created by shashank on 7/3/2015.
 */
app.controller("homeController",["$scope","gadgetService",
    function($scope,gadgetService){

            $scope.data="This is the message from homecontroller";
            $scope.gadgets = gadgetService.getGadgets();
            console.log($scope.gadgets);
    }
]);
