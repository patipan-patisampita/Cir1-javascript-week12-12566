//import from declarations
// import { sayHello, sayBye } from "./module6.js";
//import with alias
import * as say from "./module6.js";
say.sayHello("Jhon")
say.sayBye("Good bye")

//import
import hello from "./module5.js";
hello();

//import default
import greet from "./module4.js";
const fname = greet("Bill Gates");
console.log(fname);

//import multiple
import { name, sum } from "./module3.js";
console.log(name);

const add = sum(25, 10);
console.log(add);

//import the function
import { person } from "./module2.js";
const display = person("Mark Zuckerberg");
console.log(display);

//import named
import { department, task, students } from "./module1.js";
console.log(department);
console.log(task[0], task[1], task[2]);
console.log(students.id, students.name, students.age);
