/**
 * Check JS support
 * @returns {boolean}
 */
(function checkJSsupport() {
	let html = document.documentElement;

	// Check 'classList' method supports
	if (html.classList) {
		// If support, change indicator
		html.classList.remove('no-js');
		html.classList.add('js');

		return true;
	}

	// If 'classList' not supports, change indicator by replacing
	html.className = html.className.replace('no-js', 'js');

	return true;
})();
