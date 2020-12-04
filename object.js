class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says "${line}"`);
    }
}
let killerRabbit = new Rabbit('killer');
killerRabbit.speak('SKREEEE');
let blackRabbit = new Rabbit('black');
blackRabbit.speak('I\'m black');
//it's not work!
/*
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teech = "long, sharp and bloody";
console.log(killerRabbit.teeth);
*/
Rabbit.prototype.toString = function() {
    return `${this.type} rabbit`;
};
console.log(String(blackRabbit));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let r = 0; r < this.height; r++) {
            for (let c = 0; c < this.width; c++)
                this.content[r * this.width + c] = element(c, r);
        } 
    }
    get(col, row) {
        return this.content[row * this.width + col];
    }
    set(col, row, value) {
        return this.content[row * this.width + col] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.col = 0;
        this.row = 0;
        this.matrix = matrix;
    }
    next() {
        if (this.row == this.matrix.height) return {done: true};
        let value = {row: this.row,
                     col: this.col,
                     value: this.matrix.get(this.col, this.row)};
        this.col++;
        if (this.col == this.matrix.width) {
            this.col = 0;
            this.row++;
        }
        return {value, done: false};
    }
}
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};
//let matrix = new Matrix(3, 3, (col, row) => `row: ${row}, col: ${col}`);
let matrix = new Matrix(3, 3, (col, row) => 5 * row + 3 * col);
for (let {row, col, value} of matrix) 
    console.log(`row: ${row}, col: ${col}, value: ${value}`);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//getter and setter
let varyingsize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
}
console.log(varyingsize.size);
console.log(varyingsize.size);
console.log(varyingsize.size);

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return Math.floor(this.celsius * 1.8 +3.2);
    }
    set fahrenheit(value) {
        this.celsius = Math.floor((value - 32) / 1.8);
    }
    static fromFahrenheit(value) {
        return new Temperature(Math.floor((value - 32) / 1.8));
    }
}
let tmp = new Temperature(22);
console.log(tmp.fahrenheit);
tmp.fahrenheit = 68;
console.log(tmp.fahrenheit);
console.log(tmp.celsius);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//inheritate
class SymmetricMatrix extends Matrix {
    constructor(size, element = (c, r) => undefined) {
        super(size, size, (c, r) => {
            if (c < r) return element(r, c);
            else return element(c, r);
        });
    }
    set(c, r, value) {
        super.set(c, r, value);
        if (c != r) {
            super.set(r, c, vlaue);
        }
    }
}

let smatrix = new SymmetricMatrix(5, (c, r) => 2 * c + 6 * r);
//for (let {row, col, value} of smatrix) 
//    console.log(`row: ${row}, col: ${col}, value: ${value}`);
console.log(smatrix.get(2, 3), smatrix.get(3, 2));
console.log(smatrix.get(4, 1), smatrix.get(1, 4));
//instaceof
console.log(smatrix instanceof SymmetricMatrix);
console.log(smatrix instanceof Matrix);
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);