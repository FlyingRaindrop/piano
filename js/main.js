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
			Db3 = $('#Db3'),
			D3 = $('#D3'),
			Eb3 = $('#Eb3'),
			E3 = $('#E3'),
			F3 = $('#F3'),
			Gb3 = $('#Gb3'),
			G3 = $('#G3'),
			Ab3 = $('#Ab3'),
			A3 = $('#A3'),
			Bb3 = $('#Bb3'),
			B3 = $('#B3'),
			C4 = $('#C4'),
			Db4 = $('#Db4'),
			D4 = $('#D4'),
			Eb4 = $('#Eb4'),
			E4 = $('#E4'),
			F4 = $('#F4'),
			Gb4 = $('#Gb4'),
			G4 = $('#G4'),
			Ab4 = $('#Ab4'),
			A4 = $('#A4'),
			Bb3 = $('#Bb4'),
			B4 = $('#B4'),
			C5 = $('#C5'),
			Db5 = $('#Db5'),
			D5 = $('#D5'),
			Eb5 = $('#Eb5'),
			E5 = $('#E5'),
			F5 = $('#F5'),
			Gb5 = $('#Gb5'),
			G5 = $('#G5'),
			Ab5 = $('#Ab5'),
			A5 = $('#A5'),
			Bb5 = $('#Bb5'),
			B5 = $('#B5'),
			C6 = $('#C6'),
			Db6 = $('#Db6'),
			D6 = $('#D6'),
			Eb6 = $('#Eb6'),
			E6 = $('#E6'),
			F6 = $('#F6'),
			Gb6 = $('#Gb6'),
			G6 = $('#G6'),
			Ab6 = $('#Ab6'),
			A6 = $('#A6'),
			Bb6 = $('#Bb6'),
			B6 = $('#B6'),
			notesSound = [C3, Db3, D3, Eb3, E3, F3, Gb3, G3, Ab3, A3, Bb3, B3, C4, Db4, D4, Eb4, E4, F4, Gb4, G4, Ab4, A4, Bb4, B4, C5, Db5, D5, Eb5, E5, F5, Gb5, G5, Ab5, A5, Bb5, B5, C6, Db6, D6, Eb6, E6, F6, Gb6, G6, Ab6, A6, Bb6, B6],
			listSound = ['C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5', 'C6', 'Db6', 'D6', 'Eb6', 'E6', 'F6', 'Gb6', 'G6', 'Ab6', 'A6', 'Bb6', 'B6'];

		piano.on('click', function(e){ 
			var target = $( event.target );

			for(var i=0; i<notesSound.length; i++){
				console.log($(target) + notesSound[i] + listSound[i]);
				if(target.is(notesSound[i])){
					console.log($(target) + notesSound[i] + listSound[i]);
					notesSound[i].html("<audio src=\"audio/Piano.mf." + listSound[i] + ".mp3\" autoplay></audio>");
				}
			}
		});
		$(document).keyup(function(e){
			if (e.which == 65) { C3.html("<audio src=\"audio/Piano.mf.C3.mp3\" autoplay></audio>");
				 } });
		$(document).keypress(function(e){
			if (e.which == 68) { E3.html("<audio src=\"audio/Piano.mf.E3.mp3\" autoplay></audio>");
				 } });
		$(document).keydown(function(e){
			if (e.which == 65) { 
				//C3.html("<audio src=\"audio/Piano.mf.C3.mp3\" autoplay></audio>");	
			}else if (e.which == 83) { 
				D3.html("<audio src=\"audio/Piano.mf.D3.mp3\" autoplay></audio>");	
			}
		});
		
	}; 

	return{ 
		init: init 
	}; 
})(); 

FirstPage.init();