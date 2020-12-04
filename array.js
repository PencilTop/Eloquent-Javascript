//array
let seq  = [1, 2, 3];
seq.push(4);
seq.push(5);
console.log(seq, seq.length)
seq.pop();
console.log(seq, seq.length)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//object
let jim = {
    spacies : 'Human being',
    sex : 'male',
    age : 17
};
jim.height = 1.75;
jim["Family Name"] = 'Andyson';
console.log(jim); 
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//string
console.log('coconuts'.slice(4, 7));
console.log('coconuts'.indexOf('u'));
console.log('  okay \n'.trim());
console.log(String(6).padStart(3, '0'));
let sentence = "Secretarybirds specialize in stomping"
console.log(sentence.split(' '));
console.log(sentence.split(' ').join('. '));
console.log('LA'.repeat(3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//variable parameters
function max(...numbers) {
    let result = -Infinity;
    for (number of numbers) {
        if (number > result)
            result = number;
    }
    return result;
}
console.log(max(-100, 52, 1234, -2));
let nums = [1, -4, 2, 5];
console.log(max(...nums));
console.log(max(9, ...nums, -6));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {
        x : radius * Math.cos(angle),
        y : radius * Math.sin(angle)
    };
}
console.log(randomPointOnCircle(10));