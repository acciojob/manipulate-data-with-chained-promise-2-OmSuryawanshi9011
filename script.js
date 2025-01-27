function getNumbers() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4, 5, 6]);
		}, 3000)
	});
}
getNumbers().then(numbers => {
	return new Promise((resolve, reject) => {
		const evenNumbers = numbers.filter(number => number % 2 === 0);
		resolve(evenNumbers);
	});
}).then(evenNumbers => {
	return new Promise((resolve, reject) => {
		const doubledNumbers = evenNumbers.map(number => number * 2);
		resolve(doubledNumbers);
	});
}).then(doubledNumbers => {
	const outputElement = document.getElementById('output');
	outputElement.textContent = doubledNumbers.join(', ');
});