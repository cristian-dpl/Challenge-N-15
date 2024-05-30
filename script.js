// punto 2. Archivo Javascript creado

// punto 3. variables creados
let buttonCal = document.getElementById('buttonCal')

// punto 4. evento click agrgado
buttonCal.addEventListener('click', () =>{

    // ...punto 3
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let operator = document.getElementById('operator').value;
    let resultText = document.getElementById('result');
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    // punto 5. función creada para cada operación
    let result = '';
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            // punto 7. codigo para errores
            result = 'Error: división por cero';
        } else {
            result = num1 / num2;
        }
    } else {
        // ... punto 7
        result = 'Error: operador inválido';
    }
    
    // punto 6. Mostrar resultado en la pantalla
    resultText.textContent = `Resultado: ${result}`;
})

// punto 8. probar la calculadora
// funciona correctamente
