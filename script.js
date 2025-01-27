function getNumbers() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4]);
		}, 3000)
	});
}

getNumbers().then(numbers => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const evenNumbers = numbers.filter(number => number % 2 === 0);
			document.getElementById('output').textContent = evenNumbers.join(',');
			resolve(evenNumbers);
		}, 1000);
	});
}).then(evenNumbers => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const doubledNumbers = evenNumbers.map(number => number * 2);
			document.getElementById('output').textContent = doubledNumbers.join(',');
			resolve(doubledNumbers);
		}, 2000);
	});
});