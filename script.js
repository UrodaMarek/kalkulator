const calculator = {
    isOn: false,
    isM: false,
    mr: 0,
    quickMemory: [0,0],
    display: "",
    operation: ""
};

var i = 0;
var j = 0;
var k = 0; 

function cce() {
    i = 0;
    calculator.display = ""
    document.getElementById("ekran").innerHTML = 0;
    if (calculator.isOn == false ) {
        calculator.isOn = true;
    }
    else if (j == 0) {
        calculator.quickMemory[0] = 0;
        j = 1;
    }
    else {
        calculator.quickMemory = [0, 0];
        calculator.mr = 0
        j = 0;
    }
}

function off() {
    i = 0;
    j = 0;
    if (calculator.isOn == true) {
        document.getElementById("ekran").innerHTML = "";
        calculator.isOn = false;
        calculator.isM = false;
        calculator.mr = 0;
        calculator.quickMemory = [0,0];
    }
}

function setVariable(variable) {
    i = 0;
    j = 0;
    if (calculator.isOn == true) {
        calculator.display += variable;
        document.getElementById("ekran").innerHTML = calculator.display;
        calculator.quickMemory[0] = parseFloat(calculator.display);
    }
}

function useOperation(operation) {

    if (calculator.isOn == true) {
        j = 0;
        switch(operation){
            case "+":
            case "-":
            case "*":
            case "/":
                i = 0;
                calculator.display = ""
                calculator.operation = operation;
                calculator.quickMemory[1] = calculator.quickMemory[0];
                break;
            case "sqrt":
                i = 0;
                calculator.display = ""
                calculator.quickMemory[0] = Math.sqrt(calculator.quickMemory[0]);
                document.getElementById("ekran").innerHTML = calculator.quickMemory[0].toString();
                break;
            case "=":
                i = 0;
                k = 0;
                calculator.display = ""
                calculate()
                document.getElementById("ekran").innerHTML = calculator.quickMemory[0].toString();
                break;
            case "+/-":
                i = 0;
                if (calculator.quickMemory[0] > 0) {
                    calculator.quickMemory[0] -= (calculator.quickMemory[0]*2);
                }
                else {
                    calculator.quickMemory[0] -= (calculator.quickMemory[0]*2);
                }
                calculator.display = calculator.quickMemory[0].toString();
                document.getElementById("ekran").innerHTML = calculator.display;
                break;
            case "mrc":
                if (calculator.isM == true) {
                    i = 1;
                    calculator.quickMemory[0] = calculator.mr
                    calculator.display = ""
                    document.getElementById("ekran").innerHTML = calculator.mr.toString();
                }
                else if (i == 0) {
                    i = 1;
                    calculator.display = ""
                    document.getElementById("ekran").innerHTML = 0;
                }
                else {
                    i = 0;
                    calculator.mr = 0;
                    isM = false;
                }
                break;
            case "m-":
                i = 0;
                if (calculator.quickMemory[0] != 0) {
                    calculator.mr -= calculator.quickMemory[0];
                    calculator.isM = true;
                    if (calculator.mr == 0) calculator.isM = false;
                }
                break;
            case "m+":
                i = 0;
                if (calculator.quickMemory[0] != 0) {
                    calculator.mr += calculator.quickMemory[0];
                    calculator.isM = true;
                    if (calculator.mr == 0) calculator.isM = false;
                }
                break;
            case ".":
                i = 0;
                if (k == 0) {
                    k = 1;
                    calculator.display += operation;
                    document.getElementById("ekran").innerHTML = calculator.display;
                }
                break;
            case "%":
                i = 0;
                calculator.quickMemory[0] = calculator.quickMemory[1] * (calculator.quickMemory[0]/100);
                calculator.display = calculator.quickMemory[0].toString;
                document.getElementById("ekran").innerHTML = calculator.display;
                break;
        }
    }
}

function calculate() {
    switch(calculator.operation) {
        case "+":
            calculator.quickMemory[0] += calculator.quickMemory[1];
            break;
        case "-":
            calculator.quickMemory[0] = calculator.quickMemory[1] - calculator.quickMemory[0];
            break;
        case "*":
            calculator.quickMemory[0] *= calculator.quickMemory[1];
            break;
        case "/":
            calculator.quickMemory[0] = calculator.quickMemory[1] / calculator.quickMemory[0];
            break;
    }
}
