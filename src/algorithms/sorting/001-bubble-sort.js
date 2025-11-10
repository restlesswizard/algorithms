/*
* To prevent mutating the original array, we work on a copy.
* Ways to copy an array:
* 1. const copy = arr.slice();       // simple, classic
* 2. const copy = [...arr];          // spread syntax (shallow copy), syntax sugar
* 3. const copy = Array.from(arr);   // creates a new array from another
*
* Do NOT use: const copy = arr;  // this creates a reference, not a copy
* Avoid comparing edges like arr[arr.length - 1] and arr[arr.length] — the latter is undefined.
*/

export function sortBubble(arr) {
    const copy = Array.from(arr);
    for (let end = copy.length - 1; end > 0; end--) {
        for (let i = 0; i < end; i++) {
            if (copy[i] > copy[i + 1]) {
                [copy[i], copy[i + 1]] = [copy[i + 1], copy[i]]
            }
        }
    }
    return copy;
}

export function sortBubbleOpt(arr) {
    const copy = Array.from(arr);
    for (let end = copy.length - 1; end > 0; end--) {
        let swapped = false;
        for (let i = 0; i < end; i++) {
            if (copy[i] > copy[i + 1]) {
                [copy[i], copy[i + 1]] = [copy[i + 1], copy[i]]
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return copy;
}