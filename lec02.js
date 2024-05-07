"use strict";
//! Mastering function overloading in typescript: Creating flexible and reusable functions
//* Function overloading
//* signature 
// function sum(a:number,b:number):number
// function sum(a:string,b:string):string
// function sum(a:any,b:any):any{
//     return a + b
// }
//* union type
// function sum(a:number,b:number):number
// function sum(a:string,b:string):string
// function sum(a: number | string, b: number | string): number | string {
//   if (typeof a == "number" && typeof b == "number") {
//     return a + b;
//   } else {
//     return `${a}  ${b}`;
//   }
// }
// console.log(sum(5, 6));
// console.log(sum("Bilal ", "hussain"));
//! Tuple
/*
tuple is a type array
with a predefine length
and type of each ndex
*/
// let tuple:[string,number,boolean,{name:string,id:number,isHand:boolean}?] = ['bilal',33,true,{name:"akmal",id:888,isHand:true}]
let tuple = ['bilal', 33, true];
tuple.push({ name: "bilal hussain" });
console.log(tuple);
