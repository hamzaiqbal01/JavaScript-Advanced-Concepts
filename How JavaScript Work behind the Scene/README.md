## How JavaScript works behind the scene🧑🏾‍💻

Every thing in js happends inside an execution context

## Execution context:

JavaScript Execution Context is the environment in which JavaScript code is executed. It contains information about the variables, functions, and objects that are available to the code being executed, as well as the scope chain and the value of the 'this' keyword.

## Phases 🪜

This project is used by the following companies:

- Memory Creation and Memory allocation phase phase 📝
- Code Execution phase

![App Screenshot](https://snipboard.io/IzB4AO.jpg)

we always listen funcitons are values in js like

fn : {...}
here key= fn and value: {...} | function defination

### Single Threaded:

JavaScript is synchronous single threaded language("one commad at a single time in specific order")
It only goes to the next line once the current line is executed.

### What happens when you run the js code:

When js program is executed the execution environment is created in two phases as we read before,

#### 1. Memory Creation Phase:

In memory creation phase js allocate the memory to each variable and funciton and store a special value to each variable known as "undefined" in case of funciton whole defination is stored

![App Screenshot](https://snipboard.io/A3KxmD.jpg)

"functions are mini program win Js whenever funciton is executed a new execution context is created;

![App Screenshot](https://snipboard.io/f1otv6.jpg)

when Functional execution context is created it assign the value to the parameter also, like num

Return keyword tells the function that you are and done and return the controll where the funciton was invoked, after finishig the execution the Functional execution content is deleted

in the Above example squre2 become 4 in the main execution environment

![App Screenshot](https://snipboard.io/fC93FS.jpg)

when the whole program is finished its execution then whole global execution context is deleted
