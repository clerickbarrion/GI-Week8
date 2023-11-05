function patient(name,ssn) {
    class PII {
        // makes PII object not directly accessible
        #name
        #ssn
        constructor(name, ssn) {
            this.#name = name
            this.#ssn = ssn
        }

        // public methods
        getName() {
            return this.#name
        }
        giveMedicine(){
            if(this.#getSSN() === '123-45-6789') {
                console.log(`${this.getName()} needs medicine001`)
            }else {
                console.log(`${this.getName()} needs medicine002`)
            }
        }

        //private method
        #getSSN() {
            return this.#ssn
        }
    }
    return new PII(name, ssn)
}

//patient can enter name and ssn 
let patient2 = patient('john','123-45-6789')

//doctor can get the patient's name but not ssn
console.log(patient2.name)
console.log(patient2.ssn)
console.log(patient2.getName())
//unable to do console.log(patient2.#getSSN()) because its private
patient2.giveMedicine()


