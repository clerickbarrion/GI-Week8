function exercise(exercise) {
    function message(exercise) {
        return `Today's exercise: ${exercise}`
    }
    return message(exercise)
}
console.log(exercise('Running'))
console.log(exercise('Swimming'))
console.log(exercise('Dancing'))
console.log(exercise('Fencing'))