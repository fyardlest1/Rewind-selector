// Get the string from the user.
// Our Controller function or Entry point.
const getValue = () => {
    document.getElementById('theAlert').classList.add('invisible')

	// get string from page.
    let userString = document.getElementById('userString').value
	// we call reverseString
	let revString = reverseString(userString)
	// we call displayReverseString
	displayReverseString(revString)
}

// Reverse the string.
// Our logic function(s)
const reverseString = (userString) => {
    let reverseString = []

    // let name = 'Yardley'
    // name[0] = 'Y'
    // name[6] = 'y'
    // name.length = 7
    // the last position in the name array = name.length - 1
    
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
const displayReverseString = (revString) => {
	// write a messase of the page
    document.getElementById('msg').innerHTML = `Your string reversed is: ${revString}`
    // show the alert box
    document.getElementById('theAlert').classList.remove('invisible')
}