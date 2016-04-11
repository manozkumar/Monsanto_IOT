
angular.module('MosantoApp').controller('BaseController', ['$rootScope', '$scope',
        function($rootScope, $scope ) {
			console.log("BaseController");
			$scope.homeData={
    "staticData": {
        "CITY_TTILE": "Lets make our city more livable!",
        "CITY_LABEL": "This portal aims at gathering all the data gathered from various sensors installed at different points in our labs",
        "WORK_LABEL": "Our Work",
        "VIEW_STAT_LABEL": "View detailed statistics",
        "GRAPH_LABEL": "You can zoom in the graph if you need attention to detail, Just click and drag through x -axis.",
        "LIKED_LABEL": "(54) Liked it!",
        "NOT_BAD_LABEL": "(12) Not bad!",
		"TITLE":"Monsanto",
		"TITLE_LABEL":"Smart cities & IOT",
		"FIND_LABEL":"Find out more"
    }
};
}]);