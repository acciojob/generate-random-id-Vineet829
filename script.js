function makeid(l) {
     let arr = [String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1) + 48)),
		String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65)),
		String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97))]
	let result = []
	
	for(let i = 0; i < l; i++){
            result.push(arr[Math.floor(Math.random() *  (2-0 + 1) + 0)])      		
	}
	 return result.join("")
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
