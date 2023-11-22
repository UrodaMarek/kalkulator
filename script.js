const calculator = {
    isOn: false,
    isM: false,
    mr: 0,
    quickMemory: [0,0],
    display: "",
    operation: ""
};

const clicks = [0, 0, 0]

function cce() {
    clicks[0] = 0;
    calculator.display = ""
    document.getElementById("ekran").innerHTML = 0;
    if (calculator.isOn == false ) {
        calculator.isOn = true;
    }
    else if (clicks[1] == 0) {
        calculator.quickMemory[0] = 0;
        clicks[1] = 1;
    }
    else {
        calculator.quickMemory = [0, 0];
        calculator.mr = 0
        clicks[1] = 0;
    }
}

function off() {
    clicks[0] = 0;
    clicks[1] = 0;
    if (calculator.isOn == true) {
        document.getElementById("ekran").innerHTML = "";
        calculator.isOn = false;
        calculator.isM = false;
        calculator.mr = 0;
        calculator.quickMemory = [0,0];
    }
}

function setVariable(variable) {
    clicks[0] = 0;
    clicks[1] = 0;
    if (calculator.isOn == true) {
        calculator.display += variable;
        document.getElementById("ekran").innerHTML = calculator.display;
        calculator.quickMemory[0] = parseFloat(calculator.display);
    }
}

function useOperation(operation) {

    if (calculator.isOn == true) {
        clicks[1] = 0;
        switch(operation){
            case "+":
            case "-":
            case "*":
            case "/":
                clicks[0] = 0;
                calculator.display = ""
                calculator.operation = operation;
                calculator.quickMemory[1] = calculator.quickMemory[0];
                break;
            case "sqrt":
                clicks[0] = 0;
                calculator.display = ""
                calculator.quickMemory[0] = Math.sqrt(calculator.quickMemory[0]);
                document.getElementById("ekran").innerHTML = calculator.quickMemory[0].toString();
                break;
            case "=":
                clicks[0] = 0;
                clicks[2] = 0;
                calculator.display = ""
                calculate()
                document.getElementById("ekran").innerHTML = calculator.quickMemory[0].toString();
                break;
            case "+/-":
                clicks[0] = 0;
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
                    clicks[0] = 1;
                    calculator.quickMemory[0] = calculator.mr
                    calculator.display = ""
                    document.getElementById("ekran").innerHTML = calculator.mr.toString();
                }
                else if (clicks[0] == 0) {
                    clicks[0] = 1;
                    calculator.display = ""
                    document.getElementById("ekran").innerHTML = 0;
                }
                else {
                    clicks[0] = 0;
                    calculator.mr = 0;
                    isM = false;
                }
                break;
            case "m-":
                clicks[0] = 0;
                if (calculator.quickMemory[0] != 0) {
                    calculator.mr -= calculator.quickMemory[0];
                    calculator.isM = true;
                    if (calculator.mr == 0) calculator.isM = false;
                }
                break;
            case "m+":
                clicks[0] = 0;
                if (calculator.quickMemory[0] != 0) {
                    calculator.mr += calculator.quickMemory[0];
                    calculator.isM = true;
                    if (calculator.mr == 0) calculator.isM = false;
                }
                break;
            case ".":
                clicks[0] = 0;
                if (clicks[2] == 0) {
                    clicks[2] = 1;
                    calculator.display += operation;
                    document.getElementById("ekran").innerHTML = calculator.display;
                }
                break;
            case "%":
                clicks[0] = 0;
                calculator.quickMemory[0] = calculator.quickMemory[1] * (calculator.quickMemory[0]/100);
                calculator.display = calculator.quickMemory[0].toString();
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
