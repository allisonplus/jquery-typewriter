$.fn.typewriter = function() {

		var $self = $(this);
		// Convert selected element to array
		var chosenElement = $(this).text();
		console.log(chosenElement);

		// Add class of .typeAction to user selected element
		$(this).addClass('typeAction');

		// Clears text in the user selected element
		$(this).text('');

		//Show element, remove class .typeAction??
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
			// We append the element to the user selected element
			// $self refers to what element the user called our plugin on
			// We use the position number to access the element from the array, like elementSplit[0]
			$self.append(elementSplit[position]);
			// Increment the position for the next interval we get the next element from our array
			position++;
			// If the position is greater the length of the array
			if(position > elementLength) {
				// Shut it down
				clearInterval(type);
			}
			// The number below is the milliseconds of our interval
		},200);

};  // ends fn.typewriter

// What happens when it reaches the end of element?
// Potential customization options
// Typing speed, cursor showing, consistency of typing