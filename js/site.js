// Get the string from the user.
// Our Controller function or Entry point.
const getValue = () => {
	document.getElementById('theAlert').classList.add('invisible')
	document.getElementById('palindAlert').classList.add('invisible')	
	
    if (document.getElementById('userString').value.length === 0) {
		alert('Please enter a string')
	} else {
		// string validation
		let regex = /[^a-z0-9]/gi
		// get string from page.
		let userString = document.getElementById('userString').value
		userString = userString.toLowerCase()
		userString = userString.replace(regex, '')
		
        
		// we call reverseString
		let revString = reverseString(userString)
		revString = revString.toLowerCase()
		revString = revString.replace(regex,)
        
		// we display the view
		displayReverseString(revString, userString)
	}
    
}

// Reverse the string.
// Our logic function(s)
const reverseString = (userString) => {
    let reverseString = []
    
    // reverse a string with a for loop
    for (
		let index = userString.length - 1;
        index >= 0;
		index--
	) {
		reverseString += userString[index]
    }
    
    return reverseString
}

// Display the reversed string to the user.
// Display or view functions
const displayReverseString = (revString, userString) => {
	let regex = /[^a-z0-9]/gi;
	
	// compare arrays
	const result = JSON.stringify(userString) === JSON.stringify(revString)

	// if result is true
	if (result) {
		// write a messase of the page
		document.getElementById(
			'msg'
		).innerHTML = `Your string reversed is: ${revString}`
		// show the alert box
		document.getElementById('theAlert').classList.remove('invisible')

		// showing the palindrome messase
		document.getElementById('palindMsg').innerHTML =
			'Your Sting is a palindrome, Yeah!!!'
		// show the alert box
		document.getElementById('palindAlert').classList.remove('invisible')
	} else {
		// write a messase of the page
		document.getElementById(
			'msg'
		).innerHTML = `Your string reversed is: ${revString}`
		// show the alert box
		document.getElementById('theAlert').classList.remove('invisible')
	}
}
