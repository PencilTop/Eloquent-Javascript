const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1)
            unit += "s";
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, 'can', 'chickpeas');
    ingredient(0.25, 'cup', 'tihini');
    ingredient(0.25, 'cup', 'lemon juice');
    ingredient(1, 'clove', 'garlic');
    ingredient(2, 'tablespoon', 'olive oid');
    ingredient(0.5, 'teaspoon', 'cumin');
};
hummus(5);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//stack overflow error
/*
function chicken() {
    console.log("chicken came first.");
    return egg();
}
function egg() {
    console.log("egg came first.");
    return chicken();
}
console.log(chicken() + ' came first.');
*/
//optional parameters
function minus(a, b) {
    if (b == undefined) return -a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//closure
function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//pure function of a function
function zeroPad(number, width=3) {
    let string = String(number);
    while (string.length < width) {
        string = '0' + string;
    }
    return string;
}
function printFarmInvertory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows)} Cows`);
    console.log(`${zeroPad(chickens)} Chickens`);
    console.log(`${zeroPad(pigs)} Pigs`);
}
printFarmInvertory(3, 10, 5);