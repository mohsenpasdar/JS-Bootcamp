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
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes = [])
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a(n) ${this.position}.`
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

const student = new Student('Mohsen', 'Pasdar', 33, 73, ['footbal'])
console.log(student.getBio());
student.updateGrade(-5)
console.log(student.getBio());