function sumar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, ingrese dos números válidos.";
        return;
    }
    const resultado = num1 + num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}

function restar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, ingrese dos números válidos.";
        return;
    }

    const resultado = num1 - num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}

function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, ingrese dos números válidos.";
        return;
    }

    const resultado = num1 * num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}

function dividir() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, ingrese dos números válidos.";
        return;
    }

    if (num2 === 0) {
        document.getElementById('resultado').textContent = "No se puede dividir por cero.";
        return;
    }

    const resultado = num1 / num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}
