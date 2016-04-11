angular.module('MosantoApp',[]);



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

angular.module('MosantoApp').controller('chartController', ['$rootScope', '$scope',
        function($rootScope, $scope ) {
			
			
			
			var app = app || {};
$scope.CO2Data={
	"HYD":[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
	"PUN":[83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
	"CHN":[48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
	"CMB":[42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
};

$scope.averageTempratureData={
	"HYD":[7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
	"PUN":[-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
	"CHN":[-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
	"CMB":[3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
};

var Highcharts = require('highcharts');

Highcharts.theme = {
   colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#071019']
            
         ]
      },
      style: {
         fontFamily: "'Unica One', sans-serif"
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

// ===============================================


var categories = ['2AM', '4AM', '6AM', '8AM', '10AM', '12PM', '2PM', '4PM',
                '6PM', '8PM', '10PM', '12PM'];

    $('#container').highcharts({
        chart: {
            type: 'column',
              zoomType: 'x'
        },
        title: {
            text: 'Average CO2 level'
        },
        subtitle: {
            text: 'Source: IBM Bluemix'
        },
        xAxis: {
            categories: categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'CO2 level (ppm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} ppm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'HYD',
            data: $scope.CO2Data.HYD

        }, {
            name: 'PUN',
            data: $scope.CO2Data.PUN

        }, {
            name: 'CHN',
            data: $scope.CO2Data.CHN

        }, {
            name: 'CMB',
            data: $scope.CO2Data.CMB

        }]
    });



    $('#chartRow').highcharts({
        title: {
            text: 'Average Temperature',
            x: -20 //center
        },
        chart: {
            zoomType: 'x'
        },
        subtitle: {
            text: 'Source: IBM Bluemix',
            x: -20
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'HYD',
            data: $scope.averageTempratureData.HYD
        }, {
            name: 'PUN',
            data: $scope.averageTempratureData.PUN
        }, {
            name: 'CHN',
            data: $scope.averageTempratureData.CHN
        }, {
            name: 'CMB',
            data: $scope.averageTempratureData.CMB
        }]
    });

// Hide Highchart.com banner

var highChartsAd = $('svg').children()[$('svg').children().length - 1];
$(highChartsAd).hide();
			
			

}]);

angular.module('MosantoApp').controller('statController', ['$rootScope', '$scope',
        function($rootScope, $scope ) {
			console.log("statController");
			$scope.classname="fa-cloud";
			
			$scope.report={
				
				"loc":"HYD",
				"subloc":"IIIT Campus"
				
			}
			
			$scope.changedLocValue=function(reportObj){
				if(reportObj.loc === "PUN"){
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
				}
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

$scope.LocData=[
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
];

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

   }]);
$("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });