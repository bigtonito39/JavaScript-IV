// CODE here for your Lambda Classes
class Person {
    constructor(PersonAtrr) {
        this.name = PersonAtrr.name;
        this.age = PersonAtrr.age;
        this.location = PersonAtrr.location;
    }
    speak() {
        return `Hello my name is ${this.name} I am from ${this.location}`;
    }
};
class Instructor extends Person {
    constructor(InstructorAtrr) {
        super(InstructorAtrr);
        this.specialty = InstructorAtrr.specialty;
        this.favLanguage = InstructorAtrr.favLanguage;
        this.catchPhrase = InstructorAtrr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student) {
        return `${student.name} receives a perfect score on ${subject}`
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
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name }has begun sprint challenge on ${subject}`
    }
};
class ProjectManagers extends Instructor {
    constructor(ProjectManagersAtrr) {
        super(ProjectManagersAtrr);
        this.gradClassName = ProjectManagersAtrr.gradClassName;
        this.favInstructor = ProjectManagersAtrr.favInstructor;
    }
    standUp() {
        return `${This.name} announces to ${gradClassName}, @channel standy times!​​​​​`;
    }
    debugsCode() {
        return `${this.name} debugs ${Students.name}'s code on ${this.favSubjects}`
    }
}