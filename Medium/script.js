function sharePizza(slice, people) {
    return `Each person gets ${(slice/people).toFixed(2)} slices of pizza; from our ${slice} slice pizza`
}
console.log(sharePizza(8,2))
console.log(sharePizza(8,3))
console.log(sharePizza(21,20))
console.log(sharePizza(10,3))