class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }

  ratio(x, y, width) {
    return (y * width) / x;
  }

  percentage(x, y) {
    if (y === 0) {
      return `Error: Divisor cannot be zero`;
    }

    const percentageOfXY = (x / y) * 100;
    return `${percentageOfXY}%`;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return y - x;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    if (y === 0) {
      return `Error: Divisor cannot be zero`;
    }
    return x / y;
  }

  remainder(x, y) {
    if (y === 0) {
      return `Error: Divisor cannot be zero`;
    }
    return x % y;
  }

  elevate(x, y) {
    return x ** y;
  }

  sqrt(x) {
    return Math.sqrt(x);
  }

  sin(x) {
    return Math.sin(x);
  }

  cos(x) {
    return Math.cos(x);
  }

  tan(x) {
    return Math.tan(x);
  }
}

const calc = new Calculator();

console.log(calc.ratio(5, 7, 300));
console.log(calc.percentage(3, 12));
console.log(calc.percentage(3, 0));
console.log(calc.add(5, 7));
console.log(calc.subtract(5, 7));
console.log(calc.multiply(5, 7));
console.log(calc.divide(35, 7));
console.log(calc.divide(35, 0));
console.log(calc.remainder(7, 5));
console.log(calc.remainder(7, 0));
console.log(calc.elevate(5, 3));
console.log(calc.sqrt(25));
console.log(calc.sin(1));
console.log(calc.cos(1));
console.log(calc.tan(1));
