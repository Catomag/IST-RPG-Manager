async function getPackFile(file) {
	var res = { value: null };

	POST('http://localhost:3000/gamepack/' + file, res);

	while(res.value == null) { await sleep(50) };
	return res.value;
}

async function start() {
	var test = JSON.parse(await getPackFile('items'));

	for(var key in test) {
		if (test.hasOwnProperty(key)) {
			console.log(key + " -> " + test[key]);
		}
	}
}

function makeDiv(data) {
	/*var div = document.createElement("div");
	document.body.appendChild(div);


	div.appendChild();*/
}
