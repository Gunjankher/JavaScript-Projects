// mini calculator 

function  miniCalculator(sign,a,b){

if (sign!=="+"&& sign!=="-"&& sign !=="*" && sign!== "/"){
 return "unvalid sign"
}
  if (isNaN(a) || isNaN(b)) {
    return "Invalid numbers";
  }
  if (sign==="+"){
    return a+b
  }
else if (sign==="-"){
  return a-b
}
else if (sign==="*"){
  return a*b
}
else if (sign==="/") {
  if (a==0||b===0){
    return "it is not divisible by Zero"
  }
  return a/b
}
}
// check for invalid sign 
let sign = prompt("choose your sign (+,-,*,/)") 
if (sign!=="+"&& sign!=="-"&& sign !=="*" && sign!== "/"){
  console.log("invalid sign")
}
else{
let a = parseFloat(prompt("Enter your number"))
let b = parseFloat(prompt("Enter your number"))

let result = miniCalculator(sign,a,b)
console.log(result)

}

/* mini calculator using switch 

function  miniCalculator(sign,a,b){

if (sign!=="+"&& sign!=="-"&& sign !=="*" && sign!== "/"){
 return "unvalid sign"
}
  if (isNaN(a) || isNaN(b)) {
    return "Invalid numbers";
  }
   let result ; 

switch(sign){
  case "+":
    result = a+b;
break;
  case "-":
    result = a-b;
break ;
  case "*":
    result = a*b;
break; 
  case "/":
    result = a/b;
    break; 
}
  return result 
}
let sign = prompt("Enter the sign  +  -  *  / " )
if (sign!=="+"&& sign!=="-"&& sign !=="*" && sign!== "/"){
  console.log("invalid sign")}
 else {
  let a = parseFloat(prompt("Enter the first number"))
let b = parseFloat(prompt("Enter the second number"))

let result = miniCalculator(sign,a,b)
console.log(result)

}*/ 






