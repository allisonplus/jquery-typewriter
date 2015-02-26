$.fn.typewriter = function() {

		// Convert selected element to array
		var chosenElement = $(this).text();
		console.log(chosenElement);

		// Add class of .typeAction to user selected element
		$(this).addClass('typeAction');

		// Clears text in the user selected element
		$(this).text('');

		//Show element, remove class .typeAction??
		// $(this).removeClass('typeAction');

		// Create variable to measure element length 
		var elementLength = chosenElement.length;
		console.log(elementLength); // length


		// Below: creates an array with a list of all the letters
		var elementSplit = chosenElement.split('');
		console.log(elementSplit); // element split into array


		// Create For Loop that will run the function
		// Of making text appear one letter at a time

		// Use .append inside of .each function ??
		for (i = 0; i < elementLength; i++) { 
		    // $(this).append(elementSplit[i]);
		    $('typeAction').each(i, function() {
		    	$(this).append(elementSplit[i]);
		    })

		    // $("div").each(function
	};
}  // ends fn.typewriter


// What happens when it reaches the end of element?
// Potential customization options
// Typing speed, cursor showing, consistency of typing