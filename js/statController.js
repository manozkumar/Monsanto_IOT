
angular.module('MosantoApp').controller('statController', ['$rootScope', '$scope',
        function($rootScope, $scope ) {
			console.log("statController");
			$scope.classname="fa-cloud";
            var jD = jsonData ? jsonData : "jsonData not loaded";
            
             $scope.sys_date = new Date();

console.log("---> jD ", jD[0]);
            $scope.LocData=jD[0];
            $scope.subLocData=jD[1];
            $scope.sensorStatReportData=jD[2][0];
           /* console.log(angular.toJson($scope.sensorStatReportData));*/
			
			$scope.report={

	"loc": {
		"location_name": "Hyderabad"
	},
	"subloc": {
		"sub_location_name": "IIIT Campus"
	}

};
			
			$scope.changedLocValue=function(reportObj){
/*				if(reportObj.loc === "PUN"){
					$scope.subLocData=[
    {
        "Key": "NIT Campus",
        "Value": "NIT Campus"
    },
    {
        "Key": "Gundi Circle",
        "Value": "Gundi Circle"
    },
    {
        "Key": "Gandhi Road",
        "Value": "Gandhi Road"
    },
    {
        "Key": "IRIS Lab",
        "Value": "IRIS Lab"
    }
];
$scope.report.subloc="NIT Campus"
$scope.statReportData={
    "CITIZENS_COMMUNITY_VALUE": "625",
    "ONLINE_SENSORS_VALUE": "85",
    "OFFLINE_SENSORS_VALUE": "24",
    "KICKSTARTER_BACKERS_VALUE": "72",
    "TEMP_VALUE": "12",
    "LIGHT_VALUE": "524.5",
    "CO_VALUE": "511.7",
    "NETS_VALUE": "15",
    "HUM_VALUE": "49.5",
    "NOISE_VALUE": " 98.7",
    "NO2_VALUE": "1"
};
				}else{
					
					$scope.subLocData=[
    {
        "Key": "IIIT Campus",
        "Value": "IIIT Campus"
    },
    {
        "Key": "VIRTUSA Campus",
        "Value": "VIRTUSA Campus"
    },
    {
        "Key": "Cyber Pearl",
        "Value": "Cyber Pearl"
    },
    {
        "Key": "DLF Lab",
        "Value": "DLF Lab"
    }
];
	$scope.report.subloc="IIIT Campus"
				
			
$scope.statReportData={
    "CITIZENS_COMMUNITY_VALUE": "258",
    "ONLINE_SENSORS_VALUE": "72",
    "OFFLINE_SENSORS_VALUE": "20",
    "KICKSTARTER_BACKERS_VALUE": "64",
    "TEMP_VALUE": "11",
    "LIGHT_VALUE": "568.5",
    "CO_VALUE": "521.7",
    "NETS_VALUE": "13",
    "HUM_VALUE": "32.5",
    "NOISE_VALUE": " 87.7",
    "NO2_VALUE": "2"
};
				}*/
			};
			
			
			$scope.changedSubLocValue=function(reportObj){
						console.log(reportObj);
			};

			
						$scope.statData={
    "staticData": {
        "SELECT_LABEL": "Please select locations to view sensor statistics from live sites.",
        "LOC_LABEL": "Amsterdam, NL",
        "SUB_LOC_LABEL": "Sub-location",
        "CITIZENS": "CITIZENS",
        "CITIZENS_COMMUNITY": "CITIZENS COMMUNITY",
        "ONLINE_SENSORS": "ONLINE SENSORS",
        "OFFLINE_SENSORS": "OFFLINE SENSORS",
        "KICKSTARTER_BACKERS": "KICKSTARTER BACKERS",
        "SHARE": "SHARE",
        "COMPANY_LABEL": "IIIT Campus",
        "LAST_UPDATED_LABEL": "LAST UPDATE:",
        "TEMP_LABEL": "TEMP",
        "LIGHT_LABEL": "LIGHT",
        "CO_LABEL": "CO",
        "NETS_LABEL": "NETS",
        "HUM_LABEL": "HUM",
        "NOISE_LABEL": "NOISE",
        "NO2_LABEL": "NO2",
        "CELSIUS_LABEL": "'C",
        "LUX_LABEL": "LUX",
        "KQ_LABEL": "KQ",
        "DB_LABEL": "DB"
    }
};


$scope.statReportData={
    "CITIZENS_COMMUNITY_VALUE": "362",
    "ONLINE_SENSORS_VALUE": "94",
    "OFFLINE_SENSORS_VALUE": "210",
    "KICKSTARTER_BACKERS_VALUE": "58",
    "TEMP_VALUE": "14",
    "LIGHT_VALUE": "415.5",
    "CO_VALUE": "213.7",
    "NETS_VALUE": "11",
    "HUM_VALUE": "61.5",
    "NOISE_VALUE": " 73.7",
    "NO2_VALUE": "0"
};

/*$scope.LocData=[
    {
        "Key": "HYD",
        "Value": "HYD"
    },
    {
        "Key": "PUN",
        "Value": "PUN"
    },
    {
        "Key": "CHE",
        "Value": "CHE"
    },
    {
        "Key": "CMB",
        "Value": "CMB"
    }
];*/

/*$scope.subLocData=[
    {
        "Key": "IIIT Campus",
        "Value": "IIIT Campus"
    },
    {
        "Key": "VIRTUSA Campus",
        "Value": "VIRTUSA Campus"
    },
    {
        "Key": "Cyber Pearl",
        "Value": "Cyber Pearl"
    },
    {
        "Key": "DLF Lab",
        "Value": "DLF Lab"
    }
];*/

   }]);