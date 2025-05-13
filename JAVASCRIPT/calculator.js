function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function mod(num1, num2) {
    return num1 % num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}



calculator(4, 6, add);












/* var student = {
    name: "Nidhi",
    rollNo: 11,
    subjects: ["Maths", "Physics", "Bedroom"]
}

student.name;
student.rollNo; */



// CONSTRUCTOR FUNCTION
function FunctionName (input1, input2, input3, input4) {
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
    this.input4 = input4;
    this.input5 = function() {
        alert("perform this function..");
    }
}
var functionObj1 = new FunctionName("value1", 1, true, ["objVala, objValb"]);
var functionObj2 = new FunctionName("value2", 2, false, ["objVala, objValb"]);
console.log(functionObj1.input1);
console.log(functionObj2.input1);
console.log(functionObj2.input5);

