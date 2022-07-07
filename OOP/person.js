class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach(like => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes = [])
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a(n) ${this.position}.`
    }
    getYearsLeft() {
        return 60 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes = []) {
        super(firstName, lastName, age, likes = [])
        this.grade = grade
    }
    getBio() {
        return this.grade >= 70 ? `${this.firstName} is passing the class.` : `${this.firstName} is failing the class.`
    }
    updateGrade(change) {
        this.grade += change
    }
}

const student = new Employee('Mohsen', 'Pasdar', 33, 'Engineer', ['footbal'])
student.fullName = 'Zahra Fathi'
console.log(student.getBio());
