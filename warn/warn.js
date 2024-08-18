(() => {
	document.getElementById('back-btn').addEventListener('click', () => {
		if(history.length > 2) {
			history.go(-2);
		} else {
			location.href = "https://google.com/"
		}
	});

	document.getElementById('continue-btn').addEventListener('click', () => {
		chrome.storage.local.set({"bypassed": true})
		location.href = window.location.search.slice(1);
	});
})();