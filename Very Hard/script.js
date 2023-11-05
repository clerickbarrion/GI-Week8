class Person{
    constructor(name,job,age) {
        this.name = name
        this.job = job
        this.age = age
    }
    exercise() {
        console.log('Running is fun! - said no one ever')
    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }
}

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age)
        this.languages = languages
        this.busy = true
    }
    completeTask() {
        this.busy = false
        console.log(`${this.name} completed a task`)
    }
    acceptNewTask() {
        this.busy = true
        console.log(`${this.name} accepted a new task`)
    }
    offerNewTask() {
        this.busy ? 
        console.log(`${this.name} can't accept any new tasks right now.`) :
        console.log(`${this.name} would love to take on a new responsibility.`)
    }
    learnLanguage(language){
        this.languages.push(language)
        console.log(`${this.name} learned ${language}`)
    }
    listLanguages(){
        console.log(this.languages)
    }
}

// new person
const person0 = new Person('clerick','apprentice','19')
console.log(person0)
person0.exercise()
person0.fetchJob()

// new programmers
const programmer0 = new Programmer('john','frontend developer','22',['HTML','CSS','Javascript'])
const programmer1 = new Programmer('bob','backend developer','27',['SQL','Python'])
console.log(programmer0)
console.log(programmer1)

// properties between programmers are independent
programmer0.completeTask()
console.log(`${programmer0.name} is busy: ${programmer0.busy}`)
console.log(`${programmer1.name} is busy: ${programmer1.busy}`)
programmer1.offerNewTask()
programmer0.offerNewTask()
programmer0.acceptNewTask()
console.log(`${programmer0.name} is busy: ${programmer0.busy}`)

// these 2 methods work
programmer0.learnLanguage('Python')
console.log(`${programmer0.name} knows:`)
programmer0.listLanguages()
programmer1.learnLanguage('PHP')
console.log(`${programmer1.name} knows:`)
programmer1.listLanguages()