function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function GET(url) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", url, false);
	xmlHttp.send(null);
	return xmlHttp.response;
}

function POST(url, result) {
	var error = false;
	var xmlHttp = new XMLHttpRequest();

	xmlHttp.onerror = () => {
		error = true;
		console.log("There was an error");
	}

	xmlHttp.open("POST", url, true);
	xmlHttp.send();

	xmlHttp.onreadystatechange = () => {
		if (xmlHttp.readyState == XMLHttpRequest.DONE) {
			result.value = xmlHttp.response;
		}
	}
}
