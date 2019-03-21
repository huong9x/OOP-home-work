
class Calculate {
	constructor() {
		this.operations = {
			'+': add,
			'-': sub,
			'*': multiply,
			'/': divided
		}
	}

	add(x, y) {
		return x + y
	}

	sub(x, y) {
		return x - y
	}

	multiply(x, y) {
		return x * y
	}

	divided(x, y) {
		if (y == 0) {
			return "Infinity Error";
		} else
			return x / y;
	}

	do(x, y, operation) {
		return operations[operation](x, y);
	}
}

let cal = new Calculate()
console.log(cal.do(20, 5, '/'));
