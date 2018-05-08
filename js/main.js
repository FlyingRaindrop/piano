var FirstPage = (function(){ 
	

	var init = function(){ 
		_slider();
	}; 

	var _slider = function(){
		var sliderRight = $('.right'),
			sliderLeft = $('.left'),
			currentCoordinates = ['-350px', '0px', '0px', '700px'],
			firstCoordinates = ['-350px', '0px', '0px', '700px'],
			secondCoordinates = ['0px', '350px', '350px', '1050px'],
			thirdCoordinates = ['-700px', '-350px', '-350px', '350px'],
			pianos = ['.small', '.first', '.second', '.inside'];


		var _setCoordinates = function(){
			for(var i=0; i<4; i++){ 
 				currentCoordinates[i] = $(pianos[i]).css('left');
			};
		};

		var _comparisonRight = function(){
			for(var i=0; i<4; i++){ 
				if(currentCoordinates[i] == firstCoordinates[i]){
					 $(pianos[i]).animate({left: thirdCoordinates[i]}, 500);
				}else if(currentCoordinates[i] == secondCoordinates[i]){
					$(pianos[i]).animate({left: firstCoordinates[i]}, 500);
				}
			};
		};

		var _comparisonLeft = function(){
			for(var i=0; i<4; i++){ 
				if(currentCoordinates[i] == firstCoordinates[i]){
					 $(pianos[i]).animate({left: secondCoordinates[i]}, 500);
				}else if(currentCoordinates[i] == thirdCoordinates[i]){
					$(pianos[i]).animate({left: firstCoordinates[i]}, 500);
				}
			};
		};


		sliderRight.on('click', function(e){ 
			
			setTimeout(_setCoordinates, 600);
			_comparisonRight();
			console.log(currentCoordinates);
		}); 

		sliderLeft.on('click', function(e){ 
			setTimeout(_setCoordinates, 600);
			_comparisonLeft();
			console.log(currentCoordinates);
		});

		

	};

	return{ 
		init: init 
	}; 
})(); 

FirstPage.init();