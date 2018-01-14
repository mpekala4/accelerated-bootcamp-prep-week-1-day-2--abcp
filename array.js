function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
 // add the element to the beginning of the array without mutating the array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
   [array.unshift(element)];
   return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]

}

function destructivelyAddElementToEndOfArray(array, element) {
  [array.push(element)]
  return array
}

function accessElementInArray(array, index) {
  return array[2];

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift
   return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop
  return array
}

function removeElementFromEndOfArray(array) {

}
