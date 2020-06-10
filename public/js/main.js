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
	div.classList.add('rainbow');

	var ol = document.createElement("ol");

	div.appendChild(ol);

	console.log(data);

	var field = document.createElement("li");
	field.innerHTML = '<b>name</b>: ' + data[0][0];
	ol.appendChild(field);

	var field = document.createElement("li");
	field.innerHTML = '<b>description</b>: ' + data[0][1].description;
	ol.appendChild(field);

	for(obj in data) {
	}
}
