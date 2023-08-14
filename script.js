let numpantalla = "0";
let pantallaconnumero = true; //Si o No
let usarpunto = false; //Si o No
let numespera = 0;
let operapendiente = "";
let solucion = "";

function ingresarnumero(x) {
    if (x != ".") {

        if (numpantalla == "0" || pantallaconnumero == true) {
            document.Calculadora.txtboxnros.value = x;
            numpantalla = x;
        }
        else if (x != ".") {
            document.Calculadora.txtboxnros.value += x;
            numpantalla += x;
        }
    }

    if (x == "." && usarpunto == false && numpantalla == "0") {
        document.Calculadora.txtboxnros.value = "0.";
        numpantalla = x;
        usarpunto = true;
    }
    else if (x == "." && usarpunto == false) {

        document.Calculadora.txtboxnros.value += x;
        numpantalla += x;
        usarpunto = true;
    }
    else if (x == "." && usarpunto == true) {

    }
    pantallaconnumero = false;
}

function ingresaoperacion(y) {
    if (operapendiente == "") {

        numespera = document.Calculadora.txtboxnros.value;
        document.Calculadora.txtboxnros.value += y;
        operapendiente = y;
        pantallaconnumero = false;
        numpantalla = "";
        usarpunto = false;
        
    }

}

function resultado() {

    if (operapendiente != "") {
        solucion = numespera + operapendiente + numpantalla;
        document.Calculadora.txtboxnros.value = eval(solucion);
        numpantalla = eval(solucion);
        pantallaconnumero = true;
        operapendiente = "";
        usarpunto = false;

    }

}

function raiz() {

    if (operapendiente == "") {
        document.Calculadora.txtboxnros.value = Math.sqrt(numpantalla);
        pantallaconnumero = false;
        operapendiente = "";
        usarpunto = false;
    }
}

function limpiar() {

    numpantalla = "0";
    pantallaconnumero = true;
    usarpunto = false;
    numespera = 0;
    operapendiente = "";
    solucion = "";
    document.Calculadora.txtboxnros.value = "0";
}

// Función para manejar la entrada de teclado
function keyPressed() {
    if (keyCode === ENTER) {
        calculate();
    } else {
        const allowedKeys = "0123456789+-*/().";
        const key = key.toLowerCase();

        if (allowedKeys.includes(key)) {
            appendToDisplay(key);
        }
    }
}

