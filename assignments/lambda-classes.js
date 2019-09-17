// CODE here for your Lambda Classes
class Person {
    constructor(PersonAtrr) {
        this.name = PersonAtrr.name;
        this.age = PersonAtrr.age;
        this.location = PersonAtrr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};
class Instructor extends Person {
    constructor(InstructorAtrr) {
        super(InstructorAtrr);
        this.specialty = InstructorAtrr.specialty;
        this.favLanguage = InstructorAtrr.favLanguage;
        this.catchPhrase = InstructorAtrr.catchPhrase;

    }
    demo() {
        return `Today we are learning about ${this.favLanguage} !`;
    }
    grade(student) {
        return `${student.name} receives a perfect score on ${student.favSubjects}`
    }
    Gradescore(student, score) {
        return `${student.name} received a score of ${score}% `
    }

};


class Students extends Person {
    constructor(StudentsAtrr) {
        super(StudentsAtrr);
        this.previousBackground = StudentsAtrr.previousBackground;
        this.className = StudentsAtrr.className;
        this.favSubjects = StudentsAtrr.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${this.favSubjects}`;
    }
    sprintChallenge(subject) {
        return `${this.name }has begun sprint challenge on ${this.favSubjects}`
    }
    Studentsgrade() {
        return Math.round(Math.random() * (101 - 70) + 70);
    }
    graduate(grade) {
        if (grade >= 70) {
            return `${this.name } Is ready to graduate, congrats !`
        } else {
            return `${this.name} sorry but you will have to repeat the Lecture`
        }
    }
};

class ProjectManagers extends Instructor {
    constructor(ProjectManagersAtrr) {
        super(ProjectManagersAtrr);
        this.gradClassName = ProjectManagersAtrr.gradClassName;
        this.favInstructor = ProjectManagersAtrr.favInstructor;
    }
    standUp() {
        return `${this.name} announces to ${this.gradClassName}, @channel standy times!​​​​​`;
    }
    debugsCode(student) {
        return `${this.name} debugs ${student.name}'s code on ${student.className}`
    }
}

//students
let JoseReinoso = new Students({
    name: "Jose Reinoso",
    age: 31,
    location: "Pennsylvannia",
    previousBackground: "Area supervisor at amazon",
    className: "webpt10",
    favSubjects: ["HTML", "CSS", "LESS", "Javascript"],

});

let RosaReinoso = new Students({
    name: "Rosa Jerez De Reinoso",
    age: 31,
    location: "Pennsylvannia",
    previousBackground: "Housewive",
    className: "webpt10",
    favSubjects: ["HTML", "CSS"],

});

let DavidReinoso = new Students({
    name: "David Reinoso",
    age: 4,
    location: "Pennsylvannia",
    previousBackground: "Milk Drinker",
    className: "webpt10",
    favSubjects: ["Roblox"],

});
console.log(JoseReinoso.speak());
console.log(RosaReinoso.speak());
console.log(DavidReinoso.speak());


//program managers:
let RichardPrins = new ProjectManagers({
    name: "Richard Scott Prins",
    age: 20,
    location: "California",
    gradClassName: "Web 20",
    favInstructor: "Dan",
    specialty: "Javascript",
    favLanguage: "Javascript",
    catchPhrase: "You got 3 stars !",
    className: "webpt10",
});
console.log(RichardPrins.standUp());
console.log(RichardPrins.demo());
console.log(RichardPrins.debugsCode(JoseReinoso));
console.log(RichardPrins.grade(JoseReinoso));
console.log(RichardPrins.Gradescore(JoseReinoso, JoseReinoso.Studentsgrade()))

let ShaneGooch = new ProjectManagers({
    name: "Shane Gooch",
    age: 20,
    location: "Bay Area",
    gradClassName: "Lamnda TL program",
    favInstructor: "Keeran",
    specialty: "CSS",
    favLanguage: "Javascript",
    catchPhrase: "Lets explain how this works!",
    className: "webpt10",
});
console.log(ShaneGooch.standUp());
console.log(ShaneGooch.demo());
console.log(ShaneGooch.debugsCode(JoseReinoso));
console.log(ShaneGooch.grade(JoseReinoso));
console.log(ShaneGooch.Gradescore(RosaReinoso, RosaReinoso.Studentsgrade()))



//instructors

let KeiranKozlowski = new Instructor({
    name: "Keiran Kozlowski",
    age: 20,
    location: "Florida",
    specialty: 'Game design',
    favLanguage: "Java",
    catchPhrase: "Lets deepdive in some coding!"
})
console.log(KeiranKozlowski.speak())
console.log("Kerain saying:", KeiranKozlowski.demo());
console.log("Keiran saying:", KeiranKozlowski.grade(DavidReinoso));


let dan = new Instructor({
    name: "dan the teacher !",
    age: 30,
    location: "Califormnia",
    specialty: 'Teaching',
    favLanguage: "JavaScript",
    catchPhrase: "follow along me guys!"
});

console.log(dan.speak())
console.log("dan saying:", dan.demo());
console.log("dan saying:", dan.grade(RosaReinoso));
console.log(JoseReinoso.graduate(JoseReinoso.Studentsgrade()));