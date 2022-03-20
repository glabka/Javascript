let truthyValue = 'some value';
if (truthyValue) {
	console.log('it is truthy value');
}

let falsyValues = ['', "", 0, null, undefined, NaN];
for (let i = 0; i < falsyValues.length; i++) {
	if(!falsyValues[i]) {
		console.log('falsyValues[' + i + '] is a falsy value');
	}
}

