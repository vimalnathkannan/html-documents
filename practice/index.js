/*function msg(){
   alert("i am vimalnath");
}
msg()*/

/*
var obj1 = {
   address : "Mumbai,India",
   getAddress: function(){
   console.log(this.address); 
 }
}
  
var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
obj2.getAddress();  */

var obj = {
   name:  "vivek",
   getName: function(){
   console.log(this.name);
 }
    
}
      
var getName = obj.getName;
      
var obj2 = {name:"akshay",getName };
obj2.getName();

function Person(name,age,gender){
   this.name = name;
   this.age = age;
   this.gender = gender;
 }
 
 
 var person1 = new Person("Vivek", 76, "male");
 console.log(person1);
 
 var person2 = new Person("Courtney", 34, "female");
 console.log(person2);