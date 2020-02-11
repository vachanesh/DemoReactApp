jQuery(document).ready(function($){
	"use strict";
	
	/*
    ==============================================================
       Slidr Menu Script Start
    ============================================================== */
	if($("#simple-menu").length){
		$('#simple-menu').sidr();
	}
	
	/*
    ==============================================================
       Responsive Menu Script Start
    ============================================================== */
	if($("#responsive-menu-button").length){
		$('#responsive-menu-button').sidr({
		  name: 'sidr-main',
		  source: '#navigation'
		});
	}
	
	/*
    ==============================================================
       Map Script Start
    ============================================================== */
	if($('#map-canvas').length){
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	

	/*
    ==============================================================
       Map Script Start
    ============================================================== */	
	if($('.defaultCountdown').length){
		var newYear = new Date(); 
		newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
		$('.defaultCountdown').countdown({until: newYear}); 
	}

});


/* ---------------------------------------------------------------------- */
/*	Google Map Function for Custom Style
/* ---------------------------------------------------------------------- */
function initialize() {
	var MY_MAPTYPE_ID = 'custom_style';
	var map;
	var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
	var featureOpts = [
		{
		  stylers: [
			{ hue: '#f9f9f9' },			
			{ visibility: 'simplified' },
			{ gamma: 0.7 },
			{ saturation: -200 },
			{ lightness: 15 },
			{ weight: 0.6 }
		  ]
		},
		{
		featureType: "road",
		  elementType: "geometry",
		  stylers: [
			{ lightness: 30 },
			{ visibility: "simplified" }
		  ]
		},
		{
		  elementType: 'labels',
		  stylers: [		  
			{ visibility: 'on' }
		  ]
		},
		{
		  featureType: 'water',
		  stylers: [
			{ color: '#ffffff' }
		  ]
		}
	];	

	var mapOptions = {
		zoom: 13,
		scrollwheel: false,
		center: brooklyn,
		mapTypeControlOptions: {
		  mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId: MY_MAPTYPE_ID
	};

	map = new google.maps.Map(document.getElementById('map-canvas'),
		  mapOptions);

	var styledMapOptions = {
		name: 'Custom Style'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}
	/*
    ============================================================== 
 				DL Responsive Menu
    ============================================================== 
    */
	if(typeof($.fn.dlmenu) == 'function'){
		$('#kode-responsive-navigation').each(function(){
		  $(this).find('.dl-submenu').each(function(){
			if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
			  var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
			  parent_nav.append($(this).siblings('a').clone());
			  
			  $(this).prepend(parent_nav);
			}
		  });
		  $(this).dlmenu();
		});
	}