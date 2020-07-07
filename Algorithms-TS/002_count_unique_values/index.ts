// Create a function called "getCountOfUniqueValues"
const getCountOfUniqueValues = (x: number[]): number => {
    // Check the length of the array

    // If array length is equal one/zero, return the count of one/zero unique value
    if (x.length <= 1) return x.length;

    // If array length is equal two, check the first and second value. Then, return the count of unique values
    if (x.length == 2) {
        if (x[0] === x[1]) {
            return 1;
        } else {
            return 2;
        }
    }

    // Create reference (pointer) at the begining (position 1) of the array called firstRef
    let firstRef = 0;

    // Create another reference (pointer) at position 2 in the array called secondRef
    let secondRef = 1;

    // Create loop. Stay there until reference two is equal to the length of the array
    while (secondRef < x.length) { // O(n)
        // If the element in the array that points firstRef and that one that points secondref two are equal. Incremente secondRef
        // If are diferents increment secondRef and firstRef
        if (x[firstRef] !== x[secondRef]) {
            firstRef++;
            x[firstRef] = x[secondRef];
        }
        secondRef++;
    }

    return firstRef + 1;
};

export default getCountOfUniqueValues;
