function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor (name, email, subject) {
            super(name, email)
            this.subject = subject;
        }
        toString() {
           return super.toString() + `, subject: ${this.subject})`
        }
    }
    class Student extends Person{
        constructor(name, email, course) {
            super(name, email)
            this.course = course;
        }

        toString() {
            return super.toString() + `, course: ${this.course})`
        }

    }

    return {
        Person,
        Teacher,
        Student
    }
}

let p = personAndTeacher();
let Person = p.Person;
let Student = p.Student;
let Teacher = p.Teacher;

let person = new Person('pseho', 'shestako')

let teacher = new Teacher('gosho', 'goshov', 'nishto');

let student = new Student('pesho', 'peshov', 'js');

console.log(person.toString())
console.log(teacher.toString())
console.log(student.toString())

