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

## Week challenges (Tuesday) 💻

1. [Predefined functions](./challenges/e02/desc/)
2. [Full name](./challenges/e03/desc/)
3. [Throw dice](./challenges/e04/desc/)

## Week challenges (Wednesday) 💻

1. [Distance to zero](./challenges/e05/desc/)
2. [Toss coin](./challenges/e06/desc/)

## Week challenges (Thursday) 💻

1. [Structure of a function](./challenges/e07/desc/)
2. [Total price](./challenges/e08/desc/)
3. [Reverse direction and size](./challenges/e09/desc/)

## Week links 🔗

## Session links 🔗
