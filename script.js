function imc(peso, altura) {
    const imc = peso /  (altura * altura);
    let resultado = ""

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc < 24.9) {
        resultado = "Peso normal";
    } else if (imc < 29.9) {
        resultado = "Sobrepeso";
    } else if (imc < 34.9) {
        resultado = "Obesidade grau 1";
    } else if (imc < 39.9) {
        resultado = "Obesidade grau 2";
    } else {
        resultado = "Obesidade grau 3";
    }
    return document.getElementById("resultado").innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado}).`;;
}
function handleImc() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    if(isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultado").innerText = "Preencha o peso e altura com números"
    } else {  
        imc(peso, altura);
    }
    document.getElementById("peso").value = '';
    document.getElementById("altura").value = '';
}
var colorMap = {
    1: "red",
    2: "yellow",
    3: "blue",
    4: "green",
    5: "orange",
    6: "black",
    7: "brown",
    8: "coral",
    9: "aqua"
};
function paint(cores, quadrados) {
    for (var i = 0; i <= 3; i++) {
        color = cores[i];
        quadrados[i].style.backgroundColor = colorMap[color];
    }
}
function handlePaint() {
    const valueSquare = document.getElementById("square").value;
    const arrayColorsString = [valueSquare];
    const square1 = document.getElementById("1")
    const square2 = document.getElementById("2")
    const square3 = document.getElementById("3")
    const square4 = document.getElementById("4")
    const arrayColors = Array.from(String(arrayColorsString), Number);
    const arraySquares = [square1, square2, square3, square4];

    if(isNaN(valueSquare) || valueSquare === '') {
        document.getElementById("validation").innerText="Insira apenas números!";
        document.getElementById("square").value = "";
    }
    if(arrayColors.length > 4) {
        document.getElementById("validation").innerText="Insira apenas 4 números ou menos!";
        document.getElementById("square").value = "";
    } else {
        colorDecider(arrayColors, arraySquares);
    }    
}
function soma(numbers) {
    let soma = 0;
    numbers.forEach(element => {
        soma += element;
    });
    return document.getElementById("somado").innerText = `A soma é ${soma}!`
}
function handleSoma() {
    const numbers = document.getElementById("soma").value;
    if(document.getElementById("soma").value == '') {
        document.getElementById("somado").innerText = "Digite números para somar!"
    } else {
        const Numbers = numbers.split(',').map(Number);
        fazSoma(Numbers);
    }
}
