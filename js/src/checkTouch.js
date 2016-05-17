// check touchscreen
if('ontouchstart' in window || navigator.maxTouchPoints) {
	var htmlTag = document.getElementsByTagName('html')[0];
	htmlTag.className = htmlTag.className.replace('no-touch', 'is-touch');
}
