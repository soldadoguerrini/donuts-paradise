document.addEventListener("DOMContentLoaded", () => {
	const bird = document.querySelector(".bird");
	const gameDisplay = document.querySelector(".game-container");
	const ground = document.querySelector(".ground");
	console.log("mi elemento: ", ground);

	let birdleft = 0;
	let birdBottom = 500;
	let gravity = 2;
	function startGame() {
		birdBottom -= gravity;
		birdleft += 2;
		bird.style.bottom = birdBottom + "px";
		bird.style.left = birdleft + "px";
	}
	let timerId = setInterval(startGame, 20);

	function control(e){
		if (e.keyCode === 32) {
			jump()
		}
	}

	function jump() {
		if (birdBottom < 610) birdBottom += 50;
		bird.style.bottom = birdBottom + "px";
	}
	document.addEventListener("keyup", control);


	function generateObstacle(){
  document.createElement()
	}
});
