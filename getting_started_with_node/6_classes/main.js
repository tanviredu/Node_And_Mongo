// java script also support classes

class Person{
    constructor(name) {
        this.name = name;
    }
    greet(){
        console.log("hello my friend");
    }
}

class Student extends Person {
        constructor(name,level) {

            // feeding the super constructor
            super (name);
            this.level = level;
    }
    // function override
    greet() {
            console.log(`hello ${this.name} student you are in ${this.level}`)
    }

}

const a1 = new Person('Name')
a1.greet();
a2 = new Student('tanvir',5)
a2.greet();