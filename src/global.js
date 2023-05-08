function mouseMove()
{
    document.addEventListener('mousemove', (event) => {
		const dot = document.getElementById('dot');
		dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
	});
}

function slideIn()
{
	window.addEventListener('load', function() {
		const slideItems = document.querySelectorAll('.slide-item');
		slideItems.forEach(function(item, index) {
			const duration = item.getAttribute('data-transition-duration') || '0.5s';
			const easing = item.getAttribute('data-transition-easing') || 'ease';
			item.style.transitionDuration = duration;
			item.style.transitionTimingFunction = easing;
			item.style.transitionDelay = `${index * 0.2}s`;
			item.classList.add('slide-in');
		});
	});
}