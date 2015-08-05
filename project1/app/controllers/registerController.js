app.controller("registerController",function($scope){

	

	$scope.register= function(){
		$scope.displayWelcomePage = true;

		$scope.gadgetsUrl = "templates/gadgets.html";

	};

	$scope.loadCity= function(){

		$scope.user.city = $scope.user.item.capital;

	};

	function init(){
		$scope.registerPage="templates/register.html";
         $scope.user={
             firstName : "",
             lastName  : "",
             dob : "",
             email : "",
             password : "",
             city : " "

         };
          $scope.displayWelcomePage = false;
         $scope.states = [  {"stateCode":"AP","name":"Andhra Pradesh","capital":"vijaywada"},
	                        {"stateCode":"TS","name":"Telangana","capital":"Hyderabad"},
	                        {"stateCode":"TN","name":"Tamil Nadu","capital": "chennai"},
	                        {"stateCode":"KA","name":"Karnataka","capital": "banglore"}
	                ];
	        };

    init();

});