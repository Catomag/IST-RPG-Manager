async function getPackFile(file) {
	var res = { value: null };

	POST('http://localhost:3000/gamepack/' + file, res);

	while(res.value == null) { await sleep(50) };
	return res.value;
}

async function start() {
	var test = Object.entries(JSON.parse(await getPackFile('items')));

	makeDiv(test);
}

function makeDiv(data) {
	var div = document.createElement("div");
	document.body.appendChild(div);

	var ol = document.createElement("ol");

	div.appendChild(ol);

	console.log(data);

	for(obj in data[0][1]) {
		var field = document.createElement("li");
		field.innerHTML = obj;
		ol.appendChild(field);
	}
}
