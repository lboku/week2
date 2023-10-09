 // 1)დავწეროთ ფუნქცია,რომელიც დაპრინტავს "hello world"
 function hello(){
     console.log("hello world");
 }
hello();

 // 2)დავწეროთ ფუნქცია,რომელიც გამოიტანს ორი რიცხვის ჯამს.
function num(numb1,numb2){
    return(numb1+numb2)
 }
 let equals = num(5,7);
      console.log(equals);
// 3)დავწეროთ ფუნქცია,რომელიც არგუმენტად იღებს ტექსტს და აბრუნებს ტექსტის სიგრძეს.
 function length(lashaBokuchava){
          return lashaBokuchava.length;
      }
      console.log(length("lashaBokuchava"));
    
 // 4)დავწეროთ ფუნქცია,რომელიც არგუმენტად იღებს 2 სიტყვას და აბრუნებს შეწებებულ სიტყვას.
 let str1 = "lasha"
let str2 = "bokuchava"
 function conc (str1, str2) {
  return str1 + str2
 }
 console.log(conc(str1, str2));
  //5)დავწეროთ ფუნქცია, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს ამ რიცხვს,დაბრუნებული რიცხვი მოვათავსოთ ცვლადში და დავპრინტოთ.
 let numb = 4;
 function number (numb){
     return numb;
 }
 console.log(number(numb));
 // 6)დავწეროთ ფუნქცია, რომელიც არგუმენტად იღებს სიტყვას და აბრუნებს ამ სიტყვას  დიდი ასოებით.
 function cplOn (lasha) {
    return "lasha".toUpperCase()
  }
   console.log(cplOn("lasha"))
  
 // 7)დავწეროთ ფუნქცია ,რომელიც არგუმენტად იღებს სიტყვას და აბრუნებს ამ სიტყვას  პატარა  ასოებით.
 function cplOff (lasha) {
     return "LASHA".toLowerCase()
   }
   console.log(cplOff("LASHA"))
 // 8)დავწეროთ ფუნქცია,რომელსაც არგუმენტად ექნება 2 რიცხვი და დააბრუნებს ამ ორი რიცხვის გაყოფის ნაშთს.
 let numA = 16;
 let numB = 5;
 function balance (numA , numB){
     return numA % numB
 }
 console.log (balance(numA, numB))
// 9)დავწეროთ ფუნქცია,რომელსაც არგუმენტად ექნება სახელი და დააბრუნებს "hello (saxeli)"
let myName = ("lasha")
function full (myName){
    return "hello " + (myName);
}
console.log(full(myName));
// 10)დავწეროთ ფუნქცია,რომელიც არგუმენტად იღებს  2 რიცხვს და აბრუნებს ორი რიცხვის სხვაობას.
let num1 = 8;
let num2 = 5;
function diffe( num1, num2){
    return num1 - num2;
} 
console.log(diffe(num1,num2));
// 11)დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
let myNumb = 8;
function check(myNumb){
    return myNumb % 2 ===0 ? "ლუწი" : "კენტი"
}
console.log(check(myNumb))
// 12)დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
let numbD =0;
if(numbD>0){
    console.log("დადებითი")
}if(numbD<0){
    console.log("უარყოფითი")
}else{
    console.log("ნულის ტოლი")
}
// 13)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა რიცხვი გასაყოფი სხვა რიცხვზე.
let numF = 9;
let numG =3;
if(numF % numG === 0){
    console.log("იყოფა")
}else console.log("არ იყოფა")
// 14)დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
let str = ""
if(str=="") {
console.log("ცარიელია")
}else {
console.log(" არ არის ცარიელი")
}
// 15)დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.
let strA = "do"
if(strA. includes("do")){
  console.log("შეიცავს")
}
// 16)დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.let num1 = 10
let numH = 7;
let numI =5
if(numH>numI) {
  console.log("მინიმალურია "+num2) 
};