function repeat(n, action) {
    for (let i = 0; i < n; i++)
        action(i);
}
repeat(3, console.log);
repeat(5, i => console.log(`Unit ${i + 1}`));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
function every(array, test) {
    if (array.length == 0)
      return false;
    for (elem of array) 
      if (!test(elem))
        return false;
    return true;
  }
  