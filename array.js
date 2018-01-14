function addElementToBeginningOfArray(array, element) {
  ["element", ...array];
 // add the element to the beginning of the array without mutating the array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  [array.unshift("element")];
}

function addElementToEndOfArray(array, element) {
  [...array, "element"]

}

function destructivelyAddElementToEndOfArray(array, element) {
  [array.push("element")]
}

function accessElementInArray(array, index) {
  array[2];

}

function destructivelyRemoveElementFromBeginningOfArray(array) {

}

function removeElementFromBeginningOfArray(array) {
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
