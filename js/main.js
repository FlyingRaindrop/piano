var FirstPage = (function(){ 
	
	var init = function(){ 
		_slider();
		_play();
	}; 

	var _slider = function(){
		var sliderRight = $('.right'),
			sliderLeft = $('.left'),
			currentCoordinates = ['-350px', '0px', '0px', '700px'],
			firstCoordinates = ['-350px', '0px', '0px', '700px'],
			secondCoordinates = ['0px', '350px', '350px', '1050px'],
			thirdCoordinates = ['-700px', '-350px', '-350px', '350px'],
			pianos = ['.small', '.first', '.second', '.third'];


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

	var _play = function(){ 

		var piano = $('.piano'),
			C3 = $('#C3'),
			D3 = $('#D3'),
			E3 = $('#E3'),
			F3 = $('#F3'),
			G3 = $('#G3'),
			A3 = $('#A3'),
			B3 = $('#B3'),
			notesSound = [C3, D3, E3, F3, G3, A3, B3],
			listSound = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3'];

		piano.on('click', function(e){ 
			var target = $( event.target );

			for(var i=0; i<7; i++){
	
				if(target.is(notesSound[i])){
					console.log('2');
					notesSound[i].html("<audio src=\"audio/banjo_" + listSound[i] + "_very-long_forte_normal.mp3\" autoplay></audio>");
				}
			}
		});
		/*C3.on('click', function(e){ 
			C3.html("<audio src=\"audio/banjo_C3_very-long_forte_normal.mp3\" autoplay></audio>");
		});
		D3.on('click', function(e){ 
			D3.html("<audio src=\"audio/banjo_D3_very-long_forte_normal.mp3\" autoplay></audio>");
		});
		E3.on('click', function(e){ 
			E3.html("<audio src=\"audio/banjo_E3_very-long_forte_normal.mp3\" autoplay></audio>");
		});
		F3.on('click', function(e){ 
			F3.html("<audio src=\"audio/banjo_F3_very-long_forte_normal.mp3\" autoplay></audio>");
		});
		G3.on('click', function(e){ 
			G3.html("<audio src=\"audio/banjo_G3_very-long_forte_normal.mp3\" autoplay></audio>");
		});
		A3.on('click', function(e){ 
			A3.html("<audio src=\"audio/banjo_A3_very-long_forte_normal.mp3\" autoplay></audio>");
		});
		B3.on('click', function(e){ 
			B3.html("<audio src=\"audio/banjo_B3_very-long_forte_normal.mp3\" autoplay></audio>");
		});*/
		
	}; 

	return{ 
		init: init 
	}; 
})(); 

FirstPage.init();