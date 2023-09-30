//Equals to key
function bttnEquals() {
    const n1 = document.getElementById('inpt1').value;
    const n2 = document.getElementById('inpt2').value;
    const op = document.getElementById('operator').value;
    if (op == '+') {
        let sum = parseFloat(n1) + parseFloat(n2);
        document.getElementById('ans').innerHTML = sum;
    } else if (op == '-') {
        let sum = parseFloat(n1) - parseFloat(n2);
        document.getElementById('ans').innerHTML = sum;
    } else if (op == '*') {
        let sum = parseFloat(n1) - parseFloat(n2);
        document.getElementById('ans').innerHTML = sum;
    } else if (op == '/') {
        let sum = parseFloat(n1) - parseFloat(n2);
        document.getElementById('ans').innerHTML = sum;
    } else {
        document.getElementById('ans').innerHTML = 'SYNTAX ERROR';
    }
}

//clear key
function bttnC() {
    if (ans !== null || ans !== '') {
        let he = document.getElementById('inpt1');
        let he1 = document.getElementById('inpt2');
        let he2 = document.getElementById('operator');
        let he3 = document.getElementById('ans');
        he.value = ""; //inpt1
        he1.value = ""; //inpt2
        he2.value = ""; //operator
        he3.value= ""; //ans
    }
}

const v1 = document.getElementById('inpt1');//first input element
const v2 = document.getElementById('inpt2'); //second input element
const op1 = document.getElementById('operator'); //Operator
//Number keys
//Number 1
function bttn1() {
    if (v1 != null || v1 !== ''){
        
        v2.value = '1'
    }else{
        v1.value = '1';
    }
}

//Number 2
function bttn2() {
    v1.value = '2';
}
 
//Number 3
function bttn3() {
    v1.value = '3';
}

//Number 4
function bttn4() {
    v1.value = '4';
}

//Number 5
function bttn5() {
    v1.value = '5';
}

//Number 6
function bttn6() {
    v1.value = '6';
}

//Number 7
function bttn7() {
    v1.value = '7';
}

//Number 8
function bttn8() {
    v1.value = '8';
}

//Number 9
function bttn9() {
    v1.value = '9';
}

//Number 0
function bttn0() {
    v1.value = '0';
}

//Operators
//Addition key
function bttnPlus(){
    op1.value = '+';
}

//Subtraction key
function bttnMinus(){
    op1.value = '-';
}

//Multiplication key
function bttnMul(){
    op1.value = '*';
}

//Division key
function bttnDivison(){
    op1.value = '/';
}