var FirstPage = (function(){ 
	

	var init = function(){ 
		_slider(); 
	}; 

	var _slider = function(){
		var sliderRight = $('.right'),
			sliderLeft = $('.left');


		sliderRight.on('click', function(e){ 
			$(".small").animate({left: "-700px"}, 500);
			$(".first").animate({left: "-350px"}, 500);
			$(".second").animate({left: "-350px"}, 500);
			$(".inside").animate({left: "350px"}, 500);
			
		}); 

		sliderLeft.on('click', function(e){ 
			$(".small").animate({left: "0"}, 500);
			$(".first").animate({left: "350px"}, 500);
			$(".second").animate({left: "350px"}, 500);
			$(".inside").animate({left: "1050px"}, 500);
		});

		

	};


	return{ 
		init: init 
	}; 
})(); 

FirstPage.init();