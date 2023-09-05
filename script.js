function calcularIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    if(isNaN(peso) || isNaN(altura)){
        document.getElementById("resultado").innerText = "Preencha o peso e altura com números"
    } else {
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

        document.getElementById("resultado").innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado}).`;
    }
    document.getElementById("peso").value = '';
    document.getElementById("altura").value = '';
 
} 
function paintSquare(){
    const valueSquare = document.getElementById("square").value;
    const arrayColorsString = [valueSquare];
    const square1 = document.getElementById("1")
    const square2 = document.getElementById("2")
    const square3 = document.getElementById("3")
    const square4 = document.getElementById("4")
    const arrayColors = Array.from(String(arrayColorsString), Number);
    const arraySquares = [square1, square2, square3, square4];

    if(isNaN(valueSquare) || valueSquare === ''){
        document.getElementById("validation").innerText="Insira apenas números!";
        document.getElementById("square").value = "";
    }
    if(arrayColors.length > 4){
        document.getElementById("validation").innerText="Insira apenas 4 números ou menos!";
        document.getElementById("square").value = "";
    } else {
        for(var i = 0; i <= 3; i++){
            color = arrayColors[i];
            if(color == 1) {
                arraySquares[i].style.backgroundColor = "red";
            }else if (color == 2){
                arraySquares[i].style.backgroundColor = "yellow";
            }else if (color == 3){
                arraySquares[i].style.backgroundColor = "blue";
            }else if (color == 4){
                arraySquares[i].style.backgroundColor = "green";
            }else if (color == 5){
                arraySquares[i].style.backgroundColor = "orange";
            }else if (color == 6){
                arraySquares[i].style.backgroundColor = "black";
            }else if (color == 7){
                arraySquares[i].style.backgroundColor = "brown";
            }else if (color == 8){
                arraySquares[i].style.backgroundColor = "coral";
            }else if (color == 9){
                arraySquares[i].style.backgroundColor = "aqua";
            }
        }
    }    
}
function somar(){
    const numbers = document.getElementById("soma").value;
    if(document.getElementById("soma").value == ''){
        document.getElementById("somado").innerText = "Digite números para somar!"
    } else {
        const arrayNumbers = numbers.split(',').map(Number);
    console.log(arrayNumbers)
    let soma = 0;
    arrayNumbers.forEach(element => {
        soma += element;
    });

    document.getElementById("somado").innerText = `A soma é ${soma}!`
    }
    
}
