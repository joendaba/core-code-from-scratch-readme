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

2. [Full name](./challenges/e03/desc/)

### SOLUTION

    Algoritmo Nombre_Completo // programa que pide el nombre y apellido del usuario y corrige capitalización e imprime completo.
      Imprimir 'A partir de un nombre y un apellido, escribiremos el nombre completo correctamente'
      Imprimir 'Escriba el primer nombre: ' // Solicita el primer nombre del usuario.
      Leer nombre // Asigna el primer nombre a la variable nombre.
      Imprimir 'Escriba el primer apellido: ' // Solicita el primer apellido del usuario.
      Leer apellido // Asigna el primer apellido a la variable apellido.
      nombre_corregido = Mayusculas(Subcadena(nombre,0,0)) + Minusculas(Subcadena(nombre,1,Longitud(nombre)-1)) // Corrige las inciales mayúsculas y guarda en nombre corregido.
      apellido_corregido = Mayusculas(Subcadena(apellido,0,0)) + Minusculas(Subcadena(apellido,1,Longitud(apellido)-1)) //Corrige las iniciales mayúsculas y guarda en apellido corregido.
      Imprimir nombre_corregido,' ', apellido_corregido,'.' // Despliega el nombre completo corregido con iniciales mayúsculas.
    FinAlgoritmo

3. [Throw dice](./challenges/e04/desc/)

### SOLUTION

    Algoritmo Tirando_Dados

      Imprimir 'Este programa lanza los dados diez veces y despliega los resultados de cada tirada'
      Imprimir '¡Vamos a tirar dos dados!'

      Definir dado1, dado2 Como Entero // Hemos definido cada dado como una variable de tipo entero (por valores 1-6)

      Para veces = 1 Hasta 10 Con Paso 1 Hacer // Definimos el ciclo para que repita 10 veces el proceso de 'tirado' de los dados.
        dado1 = Aleatorio(1,6) // Define el valor aleatorio del primer dado con opciones entre 1 y 6.
        dado2 = Aleatorio(1,6) // Define el valor aleatorio del segundo dado con opciones entre 1 y 6.

        SI dado1 = dado2 Entonces // Define la acción a tomar si ambos valores fuesen iguales (dados iguales).
          Imprimir dado1, ' - ',dado2, ': Los dados sacaron el mismo número. ','Total de tirada: ',dado1+dado2
        SiNo
          Imprimir dado1, ' - ',dado2, ' Total de tirada: ',dado1+dado2 // Despliega los valores de cada cado por cada tirada.
        FinSi

      FinPara

    FinAlgoritmo
    

## Week challenges (Wednesday) 💻

1. [Distance to zero](./challenges/e05/desc/)

### SOLUTION

    Algoritmo Distancia_a_Cero
      // Este programa pide al suuario 5 valores, positivos o negativos, y determina cuál es el que está más alejado de '0'.
      // Compara los 5 valores y entrega como entero positivo el valor del número que más se aleja de 0.

      Imprimir 'Ingresa cinco números para que determinemos cuál está más lejos del 0.' // Solicita al usuario los 5 números.

      //Realizamos el ciclo de solicitud de cada número y lo almacenamos en su correspondiente variable
      Leer Distancia_Mayor
      Para cuenta=1 Hasta 5 Con Paso 1 Hacer // Cicla de 1 a 5.
        Escribir 'Escribe el número ',cuenta,': ' // Solicita se escriba el número n.
        Leer num // Guarda el número en variable temporal.
        SI Abs(num) > Abs(Distancia_Mayor) Entonces // Compara la distancia mayor a 0 y lo guarda en Distancia_Mayor.
          Distancia_Mayor = num // Asigna a Distancia_Mayor el valor del número (si es mayor).
        FinSi
      FinPara
      Imprimir 'El número más alejado de 0 es el ',Trunc(Distancia_Mayor) // Al final se despliega el número que está más alejado de 0.

    FinAlgoritmo

2. [Toss coin](./challenges/e06/desc/)

### SOLUTION

    Algoritmo Lanza_Moneda
      // Simulamos el lanzamiento de una moneda para elegir entre dos participantes quién es el ganador.
      // Solicitaremos los nombres de los jugadores, así como el monto que apuestan.
      // Luego de lanzar la moneda, escribiremos el nombre del ganador TODO EN MAYÚSCULAS.
      // Si un jugador hace trampa al ingresar una apuesta negativa o 0, automáticamente el otro jugador gana.
      // Se termina el programa diciendo 'Hizo trampa.'.
      // Si ambos jugadores hicieran trampa, se despliega mensaje de 'Juego Cancelado, ambos hicieron trampa.'.


      //Soicitamos los nombres de los jugadores y las apuestas de cada uno
      Escribir 'Nombre del primer jugador: '
      Leer jugador1
      Escribir 'Cantidad que apuesta: '
      Leer apuesta1
      Escribir 'Nombre del segundo jugador: '
      Leer jugador2
      Escribir 'Cantidad que apuesta: '
      Leer apuesta2

      // Validamos que las apuestas sean mayores a 0.
      //Si uno declara 0 o número negativo como apuesta, gana el otro.
      // Si ambos apuestan 0 o número negativo, lo cancelamos y decimos que hicieron trampa.
      SI apuesta1<=0 | apuesta2 <=0 Entonces
        SI apuesta1<=0 & apuesta2 <=0 Entonces
          Imprimir 'Juego Cancelado, ambos hicieron trampa'
        SiNo
          SI apuesta1<=0 Entonces
            Imprimir 'El jugador ', Mayusculas(jugador2), ' ganó: 0'
          SiNo
            Imprimir 'El jugador ', Mayusculas(jugador1), ' ganó: 0'
          FinSi
        FinSi
      SiNo
        SI Aleatorio(1,2) = 1 Entonces // Se hace el 'tirado de moneda' virtual para ver quién gana. 1 o 2 y se asigna al ganador la apuesta del otro.
          Imprimir 'El jugador ', Mayusculas(jugador1), ' ganó: ', apuesta2
        SiNo
          Imprimir "El jugador ', Mayusculas(jugador2), ' ganó: ', apuesta1
        FinSi
      FinSi

    FinAlgoritmo

## Week challenges (Thursday) 💻

1. [Structure of a function](./challenges/e07/desc/)

### SOLUTION
This was not a challenge but rather an explanatory introduction to the structure of a function, as well as the basic pre-defined functions found ni PSEint.
Structure of a function

  Description
  
  The predefined functions of pseint, are codes already integrated in the program to be used when the user requires it, normally they are mathematical functions or functions for text strings.

    - Structure of a function
      - Signature of a function
      - Name
      - Arguments, Parameters
      - Return Values
      - Function call
  
  Signature of a function
  The signature of a method or function defines its input and output. Include at least the name of the function or method and the number of its parameters. In some programming languages, you can include the type that the function returns or the type of its parameters.

  Name
  The name of a function allows us to separate it from the rest and locate it to be able to use it when necessary.

  Arguments, Parameters
  In the definition of a function the values ​​that are received are called parameters, but during the call the values ​​that are sent are called arguments.

  Return Values
  When a function returns a value, the call to the function is simply replaced by that returned value.

  Function call
  Normally the call to a function will be made from the main function main(), although naturally it can also be from another function.

    Example code
    Funcion greetingPhrase <- SayHello (age)
      Definir greetingPhrase Como Caracter;
      SI age >= 18 Entonces
        greetingPhrase = "Hello Mr. "
      SiNo
        greetingPhrase = "Hello"
      FinSi
    Fin Funcion

    Algoritmo example
      Escribir "write first name:"
      leer firstName
      Escribir "write last name:"
      leer lastName
      Escribir  "how old are you?"
      leer age
      Imprimir SayHello(age), firstName, " ", lastName
    FinAlgoritmo

2. [Total price](./challenges/e08/desc/)

  Total price
	Description
	Create a function called TotalPrice that takes 2 parameters, price and VAT, and returns the price including VAT. if the price exceeds 3000 a 10 percent discount is made on the total price.

	Expected output example
	Algoritmo example_TotalPrice
		Imprimir TotalPrice(5000,21)
	FinAlgoritmo

### SOLUTION

    Funcion calcula_valor <- Total (costo,iva) // Define la acción y argumentos de la función.
      Definir calcula_valor Como Real; // Define el tipo de la variable de la función.
      SI costo > 3000 Entonces // Valida el costo, para aplicar descuento si es mayor a 3000.
        Imprimir '(10% de descuento en compra mayor a 3000)' // Despliega descuento aplicado.
        calcula_valor = (costo + (costo/100*iva))/100*90 // Cálculo del precio total + descuento.
      SiNo
        calcula_valor = (costo + (costo/100*iva)) // Cálculo del precio total.
      FinSi
    Fin Funcion

    Algoritmo Precio_Total
      Imprimir 'Ingrese el precio de la mercadería:' // Despliega solicitud de ingreso de costo de producto.
      Leer costo // Asigna a variable costo.
      Imprimir 'Impuesto vigente:' // Despliega solicitud de ingreso de impuesto vigente.
      Leer iva // Asigna a variable iva (impuesto o VAT)
      Imprimir 'Total a pagar, incluyendo impuesto - ',Total(costo,iva) // Ejecuta función calcula_valor con los argumentos solicitados anteriormente.
    FinAlgoritmo

3. [Reverse direction and size](./challenges/e09/desc/)

## Week links 🔗

## Session links 🔗
