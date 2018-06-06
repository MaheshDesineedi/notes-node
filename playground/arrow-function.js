
var square = (x) => x * x;
console.log(square(9));

var user = {
	name: 'MAHESH',
	sayHi: () => {
		console.log(arguments);
		console.log(`${this.name}`);
	},
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi. ${this.name}`);
	}
};

user.sayHi(1,3);