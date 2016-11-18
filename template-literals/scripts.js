"use strict"

let name = 'Steven';

function makeUppercase(word) {
	return word.toUpperCase();
}

let template = `<h1>${makeUppercase('Good Morning')} ${name}</h1>
<p>The weather will be fine in your city today</p>`;

document.getElementById('template').innerHTML = template;