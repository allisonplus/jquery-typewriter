$.fn.typewriter = function() {

		var $self = $(this);
		// Convert selected element to array
		var chosenElement = $(this).text();
		console.log(chosenElement);

		// Add class of .typeAction to user selected element
		$(this).addClass('typeAction');

		// Clears text in the user selected element
		$(this).text('');
		// Adds static cursor to user selected element
		$(this).append($('<span>').text('|'));
		//Show element, remove class .typeAction
		$(this).removeClass('typeAction');

		// Create variable to measure element length 
		var elementLength = chosenElement.length;
		console.log(elementLength);

		// Below: creates an array with a list of all the letters
		var elementSplit = chosenElement.split('');
		console.log(elementSplit);

		// Our start postion for getting elements from the
		// elementSplit array, 0 becasuse we want to start from the 
		// first element
		var position = 0;
		// Set up an interval to loop every however many milliseconds
		var type = setInterval(function() {

			// Defines a random time interval
			var randTime = (Math.random() * 1000); // 5 seconds in millisconds
			  setTimeout(function() {
			    console.log("Ran after ", randTime);

			    // Sound effects
					var audio = $('audio.sound')[0];
					audio.currentTime = 0;
					audio.play();

      		// We append the element to the user selected element
					// $self refers to what element the user called our plugin on
					// We use the position number to access the element from the array, like elementSplit[0]
			    $self.find('span').before(elementSplit[position]);
			    // Increment the position for the next interval we get the next element from our array
					position++;
				}, randTime);

			 // If the position is greater the length of the array
			if (position > elementLength) {
				// Shut it down
				clearInterval(type);
			}
		},500); // ends setInterval

			// We append the element to the user selected element
			// $self refers to what element the user called our plugin on
			// We use the position number to access the element from the array, like elementSplit[0]
			// $self.find('span').before(elementSplit[position]);

			// var audio = $('audio.sound')[0];
   //    audio.play();

			// Increment the position for the next interval we get the next element from our array
			// position++;
			// // If the position is greater the length of the array
			// if(position > elementLength) {
			// 	// Shut it down
			// 	clearInterval(type);
			// }

			// Sets timeout using random time interval
		// 	setTimeout(function() {
  //   		console.log("Ran after ", randTime);
  // 		}, randTime);
		// },500); // ends setInterval

};  // ends fn.typewriter

// POTENTIAL CUSTOMIZATION OPTIONS

// Default - typingSpeed : 250, cursor : boolean?, sound effects : boolean?
// What happens when it reaches the end of element?