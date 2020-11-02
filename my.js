//Állapotok. konstatnsokat
const STATUS_FIRSTNUM = "firstnum"
const STATUS_SECONDNUM  = "secondnum"
const STATUS_OPERAND = "operand"
const STATUS_DONE = "done"

//Változók
let number1 = null;
let number2 = null;
let operand = null;
let status = STATUS_FIRSTNUM;


// Az elemek összegyűjtése
//kijelzők
let displayNumber1 = document.getElementById("displayNumber1")
let displayNumber2 = document.getElementById("displayNumber2")
let displayOperand = document.getElementById("displayOperand")

//operandus gombok
let buttonAdd = document.getElementById("buttonAdd")
let buttonMinus = document.getElementById("buttonMinus")
let buttonTimes = document.getElementById("buttonTimes")
let buttonDivide = document.getElementById("buttonDivide")
let buttonEquals = document.getElementById("buttonEquals")


//szám gombok
let button0 = document.getElementById("button0")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")
let button5 = document.getElementById("button5")
let button6 = document.getElementById("button6")
let button7 = document.getElementById("button7")
let button8 = document.getElementById("button8")
let button9 = document.getElementById("button9")

//Események, esemény kezelés: Fliratkozunk az eseményre
//operandus click
buttonAdd.addEventListener("click", OnOperandClick)
buttonMinus.addEventListener("click", OnOperandClick)
buttonTimes.addEventListener("click", OnOperandClick)
buttonDivide.addEventListener("click", OnOperandClick)
buttonEquals.addEventListener("click", OnOperandClick)

//number click
button0.addEventListener("click", OnNumberClick);
button1.addEventListener("click", OnNumberClick);
button2.addEventListener("click", OnNumberClick);
button3.addEventListener("click", OnNumberClick);
button4.addEventListener("click", OnNumberClick);
button5.addEventListener("click", OnNumberClick);
button6.addEventListener("click", OnNumberClick);
button7.addEventListener("click", OnNumberClick);
button8.addEventListener("click", OnNumberClick);
button9.addEventListener("click", OnNumberClick);


//Eseménykezelő függgvények

//Műveletek kezelése
function OnOperandClick(){
    let currentElement = this;
    let currentOperand = currentElement.innerText;

    switch (status) {
        case STATUS_DONE:
            if (currentOperand=="=") {
                break;
            }
            status = STATUS_OPERAND;
            SetOperand(currentOperand);
            break;
    
        case  STATUS_FIRSTNUM:
            if (currentOperand=="=") {
                break;
            } 
            status = STATUS_OPERAND;
            SetOperand(currentOperand);
            break

        case STATUS_OPERAND:
            if (currentOperand=="=") {
                break;
            }
            SetOperand(currentOperand);
            break;

        case STATUS_SECONDNUM: 
            //számold ki
            let answer = Math.round(eval(number1 + operand + number2)*1000)/1000;
            //berakni az első helyre
            SetNumber1(answer);
            //2. szám ürítése
            SetNumber2(null);
            if (currentOperand == "=") {
                status= STATUS_DONE
                SetOperand(null)
            }else{
                SetOperand(currentOperand)
                status = STATUS_OPERAND;
            }

    }

    console.log(status, currentOperand);
}

//számok bevitele
function OnNumberClick(){
    let currentElement = this;
    // let currentNumber = Number(currentElement.innerText);
    let currentNumber = Number(currentElement.innerText);

    //állapot vizsgálat
    switch (status) {
        case STATUS_FIRSTNUM:
            SetNumber1(number1 * 10 + currentNumber)

            break;

        case STATUS_OPERAND:
            status = STATUS_SECONDNUM;
        
        case  STATUS_SECONDNUM:
            SetNumber2(number2 * 10 + currentNumber);
            break;   

        case STATUS_DONE:
            SetNumber1(currentNumber);
            status = STATUS_FIRSTNUM;
            break;  
    }
    
    console.log(status, currentNumber);
}




//Értékadó függvények
//number1
function SetNumber1(value){
    number1 = value;
    displayNumber1.innerText = value;
}
//number1
function SetNumber2(value){
    number2 = value;
    displayNumber2.innerText = value;
}
//operand
function SetOperand(value){
    operand = value;
    displayOperand.innerText = value;
}