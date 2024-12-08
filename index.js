// Declare and initialize the cats array in global scope
var cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the cats array destructively
function destructivelyAppendCat(name) {
    cats.push(name); // Append cat to the end
    return cats; // Return the modified array
}

// Function to prepend a cat to the beginning of the cats array destructively
function destructivelyPrependCat(name) {
    cats.unshift(name); // Prepend cat to the beginning
    return cats; // Return the modified array
}

// Function to remove the last cat from the cats array destructively
function destructivelyRemoveLastCat() {
    cats.pop(); // Remove the last cat
    return cats; // Return the modified array
}

// Function to remove the first cat from the cats array destructively
function destructivelyRemoveFirstCat() {
    cats.shift(); // Remove the first cat
    return cats; // Return the modified array
}

// Function to append a cat to the end of the cats array non-destructively
function appendCat(name) {
    return [...cats, name]; // Return a new array with the new cat appended
}

// Function to prepend a cat to the beginning of the cats array non-destructively
function prependCat(name) {
    return [name, ...cats]; // Return a new array with the new cat prepended
}

// Function to remove the last cat from the cats array non-destructively
function removeLastCat() {
    return cats.slice(0, -1); // Return a new array without the last cat
}

// Function to remove the first cat from the cats array non-destructively
function removeFirstCat() {
    return cats.slice(1); // Return a new array without the first cat
}

// Example usage (for testing)
console.log(destructivelyAppendCat("Whiskers")); // ["Milo", "Otis", "Garfield", "Whiskers"]
console.log(destructivelyPrependCat("Fido")); // ["Fido", "Milo", "Otis", "Garfield", "Whiskers"]
console.log(destructivelyRemoveLastCat()); // ["Fido", "Milo", "Otis", "Garfield"]
console.log(destructivelyRemoveFirstCat()); // ["Milo", "Otis", "Garfield"]
console.log(appendCat("Bella")); // ["Milo", "Otis", "Garfield", "Bella"]
console.log(prependCat("Luna")); // ["Luna", "Milo", "Otis", "Garfield"]
console.log(removeLastCat()); // ["Milo", "Otis"]
console.log(removeFirstCat()); // ["Otis", "Garfield"]