<h1 align="center">Pseudocode & Pause Day - Week 4</h1>

## Week goal 🏁

<p>We will be learning about what a Pseudocode is and its importance in software development. For this week we will be using a program called PSeInt, with this program we will understand the fundamental principles of programming</p>

## Week subtopics

- Functions

  - Predefined functions

    - Maths
      - abs
      - trunc
      - redon
      - azar
    - Chain
      - longitud
      - mayusculas
      - minusculas
      - subcadena

  - Structure of a function
    - Signature of a function
    - Name
    - Arguments, Parameters
    - Return Values
    - Function call

## Week challenges (Monday) 💻

1. [Average sales and commission](./challenges/e00/desc)

### SOLUTION:

    Algoritmo Promedio_Ventas_y_Comisiones
      //Se calcula la comisión total a pagar por ventas.
      //Si son 5 o menos ventas, se paga el 10% por cada una como comisión.
      //Si son más de 5 ventas, se paga el 15% por cada una como comisión.

      Imprimir 'Escriba el número de ventas totales a calcular: ' // Se solicita el número de ventas que realizó el vendedor.
      Leer ventas //Se asigna el número de ventas a la variable ventas.
      total_vendido = 0 //Se inicializa la variable de total vendido con valor 0.

      Para venta = 1 Hasta ventas Con Paso 1 Hacer //Se define el ciclo para poder sumar las cantidades de cada venta.
        Imprimir  'Escriba el monto de la venta número: ',venta
        Leer cantidad
        total_vendido = total_vendido + cantidad
      FinPara

      promedio_vendido = total_vendido / ventas //A la variable promedio_vendido se le asigna el valor del promedio de ventas.

      Imprimir 'El monto promedio por venta es de: ', promedio_vendido //Se escribe el promedio de ventas.

      SI ventas <= 5 Entonces
        Imprimir 'Por ', ventas,' ventas o menos, la comisión es de 10% por venta.' //Se imprime las ventas y el porcenaje aplicado.
        Imprimir 'Total de comisiones: ', total_vendido * 0.10 //Si son 5 o menos ventas, se paga 10% de comisión.
      SiNo
        Imprimir 'Por ',ventas, ' ventas en adelante, la comisión de 15% por venta.' //Se imprime las ventas y el porcentaje aplicado.
      Imprimir 'Total de comisiones: ', total_vendido * 0.15 //Si son 6 en adelnte se paga 15% de comisión.
      FinSi
     FinAlgoritmo

2. [Even or odd](./challenges/e01/desc/)

### SOLUTION

    Algoritmo Par_Impar_50 // Algoritmo para imprimir lista de pares o impares contenidos en un número.
      Repetir
        Imprimir 'Este programa hace una lista de los números pares o impares.'
        Imprimir 'Si su número es par, lista los números pares entre 0 y su número.'
        Imprimir 'Si su número es impar, lista los números impares entre 1 y su número.'
        Imprimir 'Escriba un número entero entre 1 y 50:'
        Leer numero_a_calcular // Se lee el valor del usuario para validar si el número va entre 1 y 50.
        SI numero_a_calcular < 1 | numero_a_calcular > 50 // Se valida.
          Imprimir 'Número inválido, debe ingresar un número entero entre 1 y 50' //Si es mayor a 50 se pide repetir.
        FinSi
      Mientras Que numero_a_calcular < 1 | numero_a_calcular > 50 //Para dividir pares o impares
      par = numero_a_calcular% 2 = 0 // Se valida si el número es par y se asigna a la variable par.
      Para cuenta = 1 Hasta numero_a_calcular Con Paso 1 Hacer
        Si cuenta % 2 = 0 & par Entonces // Se imprimen los pares si el número es par.
          Imprimir cuenta
        FinSi
        Si cuenta % 2 = 1 & ~(par) Entonces // Se imprimen los impares si el número es impar.
          Imprimir cuenta
        FinSi
      FinPara
    FinAlgoritmo

## Week challenges (Tuesday) 💻

1. [Predefined functions](./challenges/e02/desc/)

### SOLUTION: There is no need for a solution, it was a round-up explanation of the integrated PSEint functions.

3. [Full name](./challenges/e03/desc/)
4. [Throw dice](./challenges/e04/desc/)

## Week challenges (Wednesday) 💻

1. [Distance to zero](./challenges/e05/desc/)
2. [Toss coin](./challenges/e06/desc/)

## Week challenges (Thursday) 💻

1. [Structure of a function](./challenges/e07/desc/)
2. [Total price](./challenges/e08/desc/)
3. [Reverse direction and size](./challenges/e09/desc/)

## Week links 🔗

## Session links 🔗
