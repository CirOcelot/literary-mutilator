function scrambler(){
	let navy = document.getElementById("trek").textContent;
	let arr = navy.split(' ');
		for(let i = 0; i < arr.length; i++) {
			let scramble = Math.floor(Math.random() + arr.length);
			let newArr = arr[i];
			arr[i] = arr[scramble];
			arr[scramble] = newArr;
		}
	arr=arr.join(" ");
		document.getElementById("scrambled").textContent = arr
}

function smurfify() {
	let navy = document.getElementById("navySeal");
	navy.textContent = navy.textContent.replace(/fucking/g, "smurfing");
	navy.textContent = navy.textContent.replace(/bitch/g, "smurf");
	navy.textContent = navy.textContent.replace(/fuck/g, "smurf")
}