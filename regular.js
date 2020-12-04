console.log(new Date());
console.log(new Date(2009, 11, 9));
function getDate(string) {
    let [_, month, day, year] = 
        /(\d{1,2})-(\d{1,2})-(\d{1,4})/.exec(string);
        return new Date(year, month - 1, day);
}
console.log(getDate("12-3-2003"));

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("5 sheep"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
let numPattern = /\b([01]+b|[\da-f]+h|\d+)\b/;
console.log(numPattern.exec('123h'));
console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));
console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "$2 $1")
);
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(_, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) 
        unit = unit.slice(0, unit.length - 1);
    else if (amount == 0) 
        amount = "no";
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
console.log(/(\d+) (\w+)/g.exec(stock));

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log(stripComments("1 + /* 2 */"));
console.log(stripComments("x = 10; //ten"));
console.log(stripComments("1 /* a*/ + /* b */ 1"));

function goodStripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(goodStripComments("1 /* a*/+/* b */ 1"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
let input = "A string with 3 numbers in it ... 42 and 88";
let number = /\b\d+\b/g;
while (match = number.exec(input))
    console.log("Found", match[0], "at", match.index);











