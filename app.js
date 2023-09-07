// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }        



 //DOM  - JAVASCRIPT
 //Pillars in javascript                                                                             

//4 Pillars of dom

//Selection of an element
//Changing Html 
//Changing Css
//Event Listener
  

// 1) Selection Of an element
// var a = document.querySelector("h1")   
// console.log(a)   
       //docuument means html document   //Agr hm na html ka koi part select krna hai to query selector lgain gy for example meny html ka H1 select
       //kiya ya  phr meny koi  idi ya class select ki to wo select ho jy  gi

// 2) Changing Html

// var a = document.querySelector("h1")
// a.innerHTML = "changed html"
 //(ii) types
// document.querySelector("h1").innerHTML = "Hello"
  
// 3) Changing CSS

// document.querySelector("h1").style.color = "black"
// document.querySelector("h1").style.backgroundColor = "purple";

// 4) Event Listner

// var a = document.querySelector("h1")
// a.innerHTML = "what is javascript";
// a.style.backgroundColor = "violet";
// a.addEventListener("click",function(){
//     // alert("Are you sure ?? You want to delete  this message?")
//  a.innerHTML = "Javascript is a server side language"
//     a.style.color  = "purple";
//     a.backgroundColor = "white"
// })

// var ros = document.querySelector("#ros")
// var btn = document.querySelector("button")

// var flag = 0;

// btn.addEventListener("click",function(){

//     if( flag == 0 ){
//         ros.style.backgroundColor = "yellow"
//         ros.style.borderColor = "red"

//         flag = 1
//     }else{
//         ros.style.backgroundColor = "transparent"
//         ros.style.borderColor = "violet"
//         flag = 0
//     } 

// })

// var btn = document.querySelector("#btn")

// btn.addEventListener("click",function(){
//     ros.style.backgroundColor = "white"
//     ros.style.borderColor = "blue"

// })


//Selecting multiple events at a same  time

// var h =  document.querySelectorAll("h1")
// console.log(h)

// h.forEach(function(e){
//    console.log(e)
// })


//