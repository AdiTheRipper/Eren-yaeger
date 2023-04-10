const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', function() {
	let offset = window.pageYOffset;
	let speed = parallax.dataset.speed;
	parallax.style.backgroundPositionY = offset * speed + "px";
});

