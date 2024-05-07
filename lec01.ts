//! array destrucing
// let arr = ["bilal", "akma", 1233, "abc@gmail.com"];

// let [, , number, email] = arr;
// console.log(email);

// //! obj destrucing
// let obj = {
//     fname:"bilal",
//     lname:"hussain",
//     rnum:222,
//     hoppies:['a','b','c']
// }
// console.log('obj: ', obj);

// let {rnum,hoppies} = obj
// console.log('lec '+ hoppies[0])

//! Interface

// interface obData {
//   fname: string;
//   lname: string;
//   age: number;
//   f: () => void;
//   hoppies: string[];
// }

// let obj: obData = {
//   fname: "bilal",
//   lname: "hussaon",
//   age: 44,
//   f: () => {
//     console.log("Bilal");
//   },
//   hoppies: ["a", "b", "c"],
// };
// let obj1: obData = {
//   fname: "bilal",
//   lname: "hussaon",
//   age: 44,
//   f: () => {
//     console.log("Bilal");
//   },
//   hoppies: ["a", "b", "c"],
// };
// let obj2: obData = {
//   fname: "bilal",
//   lname: "hussaon",
//   age: 44,
//   f: () => {
//     console.log("Bilal");
//   },
//   hoppies: ["a", "b", "c"],
// };

// console.log(obj.f());

// let firstName = 'muriel!';

// console.log(firstName.toUpperCase());

// console.log(firstName.length);

//! Type

// type idnum = number | string;
// type nameType = string;
// type ageType = number;

// type employeeType = {
//   emNum:idnum;
//   emFname: nameType;
//   emAge: ageType;
// };

// let id: idnum = 123;
// let fname: nameType = "bilal";
// let age: ageType = 22;

// let employee: employeeType = {
//   emNum: id,
//   emFname: fname,
//   emAge: age,
// };
// let employee1: employeeType = {
//   emNum:"12333",
//   emFname: "bilal",
//   emAge: 23,
// };
// let employee2: employeeType = {
//   emNum:2333,
//   emFname: "bilal",
//   emAge: 23,
// };

// console.log(employee2);

//! interface extend & merge

// interface personD {
//   name: string;
//   age: number;
// }
// interface emplId extends personD {
//   email: string;
// }
// interface director extends emplId {
//   role: boolean;
//   staff: string;
// }
// let pD: personD = {
//   name: "Bilal",
//   age: 44,
// };
// let employee: emplId = {
//   name: "Bilal",
//   age: 44,
//   email: "bilal@gmail.com",
// };
// let dictor: director = {
//   name: "Bilal",
//   age: 44,
//   email: "bilal@gmail.com",
//   role: true,
//   staff: "junior",
// };

//! type and interface
// type abc = {} //*syntax
// interface abcd {} //* syntax

// type nam = string;

// interface name11 = string  //! not use

// interface abc {
//   name1: nam;
// }

// * interface extend working
// * type is not extend error issue

//! literal Type

//! Union Type

// let Uniontype: string | number;

// let literalType: "bilal" | 2333 | "akmal" | ['a',233] ;

// literalType: "tenson";

// type world = "hello";

// type greeting = `hi ${world}`

// let a : greeting

// // a = "bilal"  //error

// a = 'hi hello'

//! Intersection

// type in the work
// type personDeatail = {
//   name: string;
//   age: number;
// };
// type officialDeatail = {
//   email: string;
//   status: string;
// };
// type PersonsDeatail = personDeatail & officialDeatail;

// let person:PersonsDeatail = {
//   name: "bilal",
//   age: 33,
//   email: "abc@gmail.com",
//   status: "gender",
// };

// console.log(person)

//! callback functon

// function hello(callback: any,newName:string) {
//   callback(newName);
// }

// let arrowFunc = (name1: string) => {
//   console.log("Hello world " + name1);
// };

// hello(arrowFunc,"akmaljutt");

//! Error Handling Made Easy with try catch Catching and Handling Runtime Errors

// console.log("start");

// try {
//   // let a = "Bilal";
//   console.log(a);
// } catch (error) {
//   console.log("error");
// }
// console.log("end");

// function f1() {
//   try {
//     for (let i = 0; i < 5; i++) {
//       console.log(a);
//     }
//   } catch (error) {
//     console.log("error loop");
//   }
// }

// f1();

// async function f1() {
//   try {
//     let fatchData = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let response = await fatchData.json();
//     console.log(response);
//   } catch (error) {
//     console.log("eeror api");
//   }
// }

// f1();

//! What is closures ?
//! What is lexical environment or lexical scope?

// function f1() {
//   let a = "Happy Birthday Bilal";
//   return function () {
//     return a;
//   };
// }

// let closuresFun = f1();
// console.log(closuresFun()); //Closures Function

//* lexiacal environment
// function f1(a:string) {
//* let a = "Happy Birthday Bilal"; //commitment
//   return function () {
//     return a;
//   };
// }

// let closuresFun = f1("Happy Birthday ");
// console.log(closuresFun()); //Closures Function

// function f1(a: string) {
//   //* let a = "Happy Birthday Bilal"; //comitmemnt
//   return function (b: string) {
//     return a + b;
//   };
// }

// let closuresFun = f1("Happy Birthday ");
// console.log(closuresFun(" Bilal")); //Closures Function

// function f1(a: number) {
//   return {
//     f2: function (b: number) {
//       return a + b;
//     },
//     f3:function(c:number){
//       return a + c
//     }
//   };
// }

// let closuresFUnc = f1(2);
// console.log(closuresFUnc.f2(3));
// console.log(closuresFUnc.f3(5));

//! Enum
/*
//* set of value
//* define index or return index
//* or return value
*/

// enum Student {
//   bilal = 12, //* define index = 12
//   akmal, //* index = 13 output
//   junaid, //* define index  output = 14
// }

//* const student:Student = Student.akmal;
//! or
//* const student: Student = Student["akmal"];

// const test: string = Student[0];
// console.log(test);

// const student: Student = Student["akmal"];
// console.log(student);

// enum Student {
//   bilal = "bilal", //* value define
//   akmal = "akmal",
//   junaid = "junaid",
// }

// const student: Student = Student["akmal"];
// console.log(student);

/*
enum Student {
  bilal = 12, //* define index = 12
  akmal, //* index = 13 output
  junaid, //* define index  output = 14
}


//* Or

//* is define value mean name anyting

enum Student {
  bilal = "bilal", //* value define
  akmal = "akmal",
  junaid = "junaid",
}



function f1(p: string) {
  return p;
}
console.log(f1(Student.akmal));
console.log(f1(Student[12]));

*/

//! Typescript structural typing: Write clean, flexible and type safe code

//! Effortless array/object manipulation with rest & spread operators

//syntx

// ... rest and spread

//* Spread
// let arr1 = ["akmal", "nabeel", "muzammil"];
// let arr2 = ["junaid", "bilal", 122];
// let arr3 = ['jawad',"junaid", "bilal", 122];

//*  two or more merge Spread
// let updateArr = [...arr1, ...arr2 ,...arr3];
// console.log(updateArr)

// let obj1 = {
//   name :"bilal",
//   age:44,
//   email:"abc@gmail.com",
// }

// let obj2 = {
//   ...obj1,
//   name:"akmal",
// }

// console.log(obj1)
// console.log(obj2)

//* Rest

// function sum(a: number, b: number, ...otherNumber: number[]) {
//   // console.log(otherNumber);
//   console.log(a + b + otherNumber[5]);
// }
// sum(4, 5, 3, 4, 5, 6, 6, 7, 8);

// let obj1 = {
//   name: "bilal",
//   age: 44,
//   email: "abc@gmail.com",
//   phone: 5545554,
//   ed: "BBSS",
// };

// const { ...rest } = obj1;
// console.log(rest);

//! Join

// let arr = ["akmal", "muzammil", "junaid"];
// let res = arr.join(); //! array convert into string
// let res = arr.join(" ");
// let res = arr.join(" - ");
// let res = arr.join(" and ");
// console.log(res);

//! Mastering array manipulation with the concat method
// let arr1 = [1,2,3,4]
// let arr2 = [1,2,3,4,6,7,8]
// let arr3 = [11,12,34]
// let res = arr1.concat(5,arr2,arr3)
// console.log(res)

//! while and Do while loop
// let i = 1;
//* while
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//* dowhile
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

export {};
