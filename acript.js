///////////////////////////////////// Start ////////////////////////////////////////

let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let container = document.querySelector('.container');
let reset = document.querySelector('#reset')
let numElemetn = [];
var Value = 0;
let textin = document.querySelector('#Text_inp');
let animat = document.querySelector('.config');
let intervalId;
let audio = document.getElementById('myAudio')
let audio1 = document.getElementById('myAudiowin');


//////////////////////////////   upper section are decleare all the variable///////////



///////////////////////////////// This loop for wheel out side led lamp///////////////


for (let i = 0; i < 20; i++) {
	numElemetn.push(

		`<span class="lamp" style="--index:${i}"><p class="ledoff"></p></span>`
	)
}
container.insertAdjacentHTML("afterbegin", numElemetn.join(""));


/////////////////////////////// End this part ////////////////////////////////////


////////////////////////// Function for checking number and convert wheel rotation//////



function check() {


	if (textin.value == 0) {
		//	let randomNumber = Math.floor(Math.random() * (1466 - 1435 + 1)) + 1435;
		Value = 1450;
	} else if (textin.value == 1) {
		//	let randomNumber = Math.floor(Math.random() * (1430 - 1400 + 1)) + 1400;
		Value = 1415;
	} else if (textin.value == 2) {
		//	let randomNumber = Math.floor(Math.random() * (1754 - 1723 + 1)) + 1723;
		Value = 1739;
	} else if (textin.value == 3) {
		//let randomNumber = Math.floor(Math.random() * (1718 - 1687 + 1)) + 1687;
		Value = 1703;
	} else if (textin.value == 4) {
		//	let randomNumber = Math.floor(Math.random() * (1682 - 1651 + 1)) + 1651;
		Value = 1667;
	} else if (textin.value == 5) {
		//let randomNumber = Math.floor(Math.random() * (1646 - 1615 + 1)) + 1615;
		Value = 1631;
	} else if (textin.value == 6) {
		//	let randomNumber = Math.floor(Math.random() * (1610 - 1579 + 1)) + 1579;
		Value = 1595;
	} else if (textin.value == 7) {
		//	let randomNumber = Math.floor(Math.random() * (1574 - 1543 + 1)) + 1543;
		Value = 1559;
	} else if (textin.value == 8) {
		//	let randomNumber = Math.floor(Math.random() * (1538 - 1507 + 1)) + 1507;
		Value = 1523;
	} else if (textin.value == 9) {
		//	let randomNumber = Math.floor(Math.random() * (1502 - 1471 + 1)) + 1471;
		Value = 1487;
	} else {
		alert("Wrong Enter")
	}
}


////////////////////////////////   End This Part  //////////////////////////////




/////////////////////////////   Spin button event ///////////////////////////////


spinBtn.addEventListener("click", () => {

	if (textin.value) {

		let ledoffElements = document.querySelectorAll('.ledoff');
		setTimeout(() => {

			let isGreen = false; // A flag to alternate between green and red

			intervalId = setInterval(() => {
				if (isGreen) {
					ledoffElements.forEach((element, index) => {
						element.style.background = " radial-gradient(circle, rgba(99,255,0,1) 66%, rgba(75,75,75,1) 100%)";
						element.style.boxShadow = "0 0 10px 5px #63ff00";

					});
				} else {
					ledoffElements.forEach((element, index) => {

						element.style.background = "radial-gradient(circle, rgba(255,0,0,1) 66%, rgba(75,75,75,1) 100%)";
						element.style.boxShadow = "0 0 10px 5px red";
					});
				}
				isGreen = !isGreen;
			}, 500);
		}, 100);



		wheel.style.transition = "transform 5s ease-out"
		check();

		wheel.style.transform = "rotate(" + Value + "deg)";

		audio.play() // Play wheel Audio



		setTimeout(() => {
			animat.innerHTML = textin.value;
			animat.style.display = "flex"
			audio1.play();

		}, 5500);

		setTimeout(() => {
			animat.innerHTML = "";
			animat.style.display = "none"
		}, 10000);

		setTimeout(() => {
			wheel.style.transform = "rotate(" + 0 + "deg)";
			wheel.style.transition = "transform 0s";
			clearInterval(intervalId);
			Value = 0
			console.log("Value reset");
			textin.value = null;
			ledoffElements.forEach((element, index) => {
				element.style.background = "radial-gradient(circle, rgba(255,0,0,1) 45%, rgba(54,54,54,1) 100%)"
				element.style.boxShadow = "none";
			});
		}, 7000);

	} else {
		alert("Please Enter something")
	}


})
