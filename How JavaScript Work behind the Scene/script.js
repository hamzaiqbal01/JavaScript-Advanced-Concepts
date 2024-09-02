// var x = 10;

// function getName() {
//     console.log("learn js")
// }

// getName();
// console.log(x);
// console.log(getName)



// How functions work in js
// var name = "hamza";
// student1();
// student2();
// console.log(name)

// function student1() {
//     let name = "taimoor";
//     console.log(name)
// }

// function student2() {
//     let name = "zahid";
//     console.log(name)
// }


// var a = 1;



// // lexical scope:


// function calculator() {
//     var userInput = 10;
//     function sum() {
//         console.log(`user input is = ${userInput}`);
//     }
//     sum();
// }

// calculator();


// let a;
//  console.log(a);
//  var b;


// var x = 10;

// {
//     var x = 20;
//     let b = 30;
// }
// console.log(x)


// function x() {
//     var i = 10;
//     setTimeout(() => {
//         console.log(i)
//     }, 2000);
// }
// x();


function print() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }
}
print();