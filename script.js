
const sayHelloWorld = () => console.log("Hello World");
sayHelloWorld();

let returnParameter = (value = "No parameter") => value; 
console.log(returnParameter(5));
console.log(returnParameter());

let double = (value) => value * 2;
console.log(double(5));

let mutlication = (a,b) => a * b;
console.log(mutlication(2,9));

let stringWithStar = (string) => console.log("* "+string+" *");
stringWithStar("Greg");

let returnType = (parameter) => {
    let type = typeof(parameter)
    if(type === "object"){
        return "Array";
    }else{
        return type;
    }   
    
}
// Test function returnType

let str=[];
let a = 5;
console.log(returnType(str));
console.log(returnType(a));