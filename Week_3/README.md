<h1 align="center">Pseudocode - Week 3</h1>

## Week goal 🏁

<p>Learn about advanced conditional control structures for decision making, loops for repeating routines, and combining them to solve complex algorithms.</p>

## Week subtopics

- Conditionals
  - IF / else conditionals Review
  - Switch / Case (Simple Switch)
  - Switch / Case / else (Simple with else)
  - Switch and If (Nested conditionals)
- Loops
  - While loop
  - Do while loop
  - For loop
  - Foreach loop

## Week challenges (Monday) 💻

1. [Simple calculator](./challenges/e00/desc)

### SOLUTION
Algoritmo Calculadora_Simple
	// Despliegue de texto para describir el proceso del algoritmo 
	Imprimir '====== Simple Calculator ======'
	
	//Solicitud de ingreso de los números 1 y 2, asignación de los valores a la variable correspondiente
	Imprimir 'Escriba el primer número:'
	Leer Numero1
	Imprimir 'Escriba el segundo número:'
	Leer Numero2
	
	//Solicitud de selección de la operación
	Imprimir 'Qué operación quiere hacer?: + . - . * . / '
	Leer op
	
	//Se ejecuta un caso de acuerdo a la operación seleccionada
	Segun op Hacer
		
		//Para la Suma
		"+" :
			Imprimir "Sumar"
			//Se anuncia la operación y se ejecuta, presentando el resultado como texto
			Imprimir "Procesando: ",Numero1," " op," " Numero2
			Imprimir "Resultado: " + ConvertirATexto(Numero1+Numero2)
			
		//Para la Resta
		"-" :
			Imprimir "Restar"
			//Se anuncia la operación y se ejecuta, presentando el resultado como texto
			Imprimir "Procesando: ",Numero1," " op," " Numero2
			Imprimir "Resultado: " + ConvertirATexto(Numero1-Numero2)
			
		//Para la Multiplicación	
		"*" :
			Imprimir "Multiplicar"
			//Se anuncia la operación y se ejecuta, presentando el resultado como texto
			Imprimir "Procesando: ",Numero1," " op," " Numero2
			Imprimir "Resultado: " + ConvertirATexto(Numero1*Numero2)
			
		//Para la División
		"/" :
			Imprimir "Dividir"
			//Validamos que el divisor no sea 0 y se anuncia que la operación no es válida
			Si Numero2==0
				Imprimir "Error: la división entre 0 no está definida"
			SiNo
			//Se anuncia la operación y se ejecuta, presentando el resultado como texto
				Imprimir "Procesando: ",Numero1," " op," " Numero2
				Imprimir "Resultado: " + ConvertirATexto(Numero1/Numero2)
			FinSi
			
		//Si el usuario selecciona un operador distinto a los de la lista
		De Otro Modo:
			Imprimir "Operación no definida"
	FinSegun
FinAlgoritmo


2. [Special number](./challenges/e01/desc)

### SOLUTION

Algoritmo Special_Number
	Imprimir 'Escriba un número'
	Leer n
	Si n == 100 Entonces
		Imprimir 'This is a special number'
	FinSi
	
	Si n < 1000 Entonces
		Imprimir ''
	SiNo
		Imprimir 'This is just a regular number'
	FinSi
	Si n%10 == 0 Entonces
		Imprimir 'This number is a multiple of 10'
	FinSi
FinAlgoritmo


## Week challenges (Tuesday) 💻

1. [Simple calculator with Switch](./challenges/e02/desc)

### SOLUTION

// Algoritmo para una calculadora que sigue hasta que el usuario decide salir
Algoritmo Calculadora_Do_While
		// Despliegue de texto para describir el proceso del algoritmo 
	Imprimir '====== Simple Calculator ======'
		
	//Se utiliza el comando Repetir Hasta Que 
	Repetir
			
		//Solicitud de ingreso de los números 1 y 2, asignación de los valores a la variable correspondiente
		Imprimir 'Escriba el primer número:'
		Leer Numero1
		Imprimir 'Escriba el segundo número:'
		Leer Numero2
		
		//Solicitud de selección de la operación
		Imprimir 'Qué operación quiere hacer?: + . - . * . / '
		Leer op
		
		//Se ejecuta un caso de acuerdo a la operación seleccionada
		Segun op Hacer
			
			//Para la Suma
			"+" :
				Imprimir "Sumar"
			//Se anuncia la operación y se ejecuta, presentando el resultado como texto
				Imprimir "Procesando: ",Numero1," " op," " Numero2
				Imprimir "Resultado: " + ConvertirATexto(Numero1+Numero2)
				
			//Para la Resta
			"-" :
				Imprimir "Restar"
				//Se anuncia la operación y se ejecuta, presentando el resultado como texto
				Imprimir "Procesando: ",Numero1," " op," " Numero2
				Imprimir "Resultado: " + ConvertirATexto(Numero1-Numero2)
				
			//Para la Multiplicación	
			"*" :
				Imprimir "Multiplicar"
				//Se anuncia la operación y se ejecuta, presentando el resultado como texto
				Imprimir "Procesando: ",Numero1," " op," " Numero2
				Imprimir "Resultado: " + ConvertirATexto(Numero1*Numero2)
				
			//Para la División
			"/" :
				Imprimir "Dividir"
				//Validamos que el divisor no sea 0 y se anuncia que la operación no es válida
				Si Numero2==0
					Imprimir "Error: la división entre 0 no está definida"
				SiNo
					//Se anuncia la operación y se ejecuta, presentando el resultado como texto
					Imprimir "Procesando: ",Numero1," " op," " Numero2
					Imprimir "Resultado: " + ConvertirATexto(Numero1/Numero2)
				FinSi
				
				//Si el usuario selecciona un operador distinto a los de la lista
			De Otro Modo:
				Imprimir "Operación no definida"
		FinSegun
		Imprimir '¿Desea realizar otro cálculo?: Si / No'
		Leer continuar
	Mientras Que continuar == 'Si' | continuar == 'si' | continuar = 'sI' | continuar == 'SI' | continuar== 'S' | continuar == 's'
FinAlgoritmo	

2. [Multi Option Program](./challenges/e03/desc)

### SOLUTION

Algoritmo Multi_Option_Program
	//Programa para realizar una operación de un menú, previa selección del usuario de la opción de dicho menú
	Imprimir " ====== Programa Multi Opción ======"
	Imprimir "Seleccione una de las siguientes opciones ingresando el número y presione Enter"
	Imprimir "1 - Suma de Dos Números"
	Imprimir "2 - Imprimir Día de la Semana"
	Imprimir "3 - Calculadora de Longitud de Texto"
	
	//Se asigna a la variable op el valor seleccionado por el usuario para la operación que corresponde
	Leer op
	Segun op Hacer
		
		//Si el usuario ingresa 1, entonces debemos ejecutar el algoritmo de la Suma Simple de Dos Números
		1:
			//Se describe la operación.
			Imprimir "Sumar"
			
			//Se solicitan los sumandos y se almacenan en la variable en memoria
			Imprimir 'Escriba el primer número:'
			Leer Numero1
			Imprimir 'Escriba el segundo número:'
			Leer Numero2
			
			//Se anuncia la operación y se ejecuta, presentando el resultado como texto
			Imprimir "Procesando: ",Numero1," + ",Numero2
			Imprimir "Resultado: " + ConvertirATexto(Numero1+Numero2)
			
		//Si el usuario ingresa 2, se ejecuta el algoritmo que escribe el nombre del día de la esemana
		2:
			//Se describe el propósito del algoritmo 
			Imprimir "Programa para escribir el día de la semana"
			
			//Se solicita confirmar si es semana laboral o no
			Imprimir "¿Es semana laboral?: S/N"
			Leer laboral 
			//Se valida que las opciones de ingreso del usuario sean tomadas correctamente para guardar en la variable laboral
			Si laboral = 'S' | laboral = 'SI' | laboral = 'Si' | laboral = 's' | laboral = 'si' | laboral = 'sI' | laboral = 'N' | laboral = 'NO' | laboral = 'No' | laboral = 'nO' | laboral = 'no' | laboral = 'n'
				Entonces
				
			Segun laboral Hacer 
				
					//Si es semana laboral (5 días) se solicita el número para el que corresponde)
				"S"|'SI'|'s'|'si'|'Si'|'sI':
					//Al seleccionar S, el usuario indica que es una semana laboral y se le indica
					Imprimir "Semana laboral - 5 días, inicia Lunes"
					Imprimir "Por favor escriba el número que corresponde al día de la semana y presione Enter: "
					Leer dia
					Segun dia Hacer
						1: Imprimir "Lunes"
						2: Imprimir "Martes"
						3: Imprimir "Miércoles"
						4: Imprimir "Jueves"
						5: Imprimir "Viernes"
							
							
						//Si el usuario elige un número que no está en la lista, se le indica
						De Otro Modo:
							Imprimir "Día Incorrecto"
					FinSegun
					
				//Si es semana calendario (7 días) se solicita el número para el que corresponde)
				"N"|'NO'|'n'|'no'|'No'|'nO':
					//Al seleccionar N, el usuario indica que es una semana calendario y se le notifica
					Imprimir "Semana Calendario - 7 días, inicia Domingo"
					Imprimir "Por favor escriba el número que corresponde al día de la semana y presione Enter: "
					Leer dia
					Segun dia Hacer
						1: Imprimir "Domingo"
						2: Imprimir "Lunes"
						3: Imprimir "Martes"
						4: Imprimir "Miércoles"
						5: Imprimir "Jueves"
						6: Imprimir "Viernes"
						7: Imprimir "Sábado"
							
							
						//Si el usuario elige un número que no está en la lista, se le indica
						De Otro Modo:
							Imprimir "Día Incorrecto"
					FinSegun
			FinSegun
			
		FinSi
		
		//Si el usuario selecciona 3, se ejecuta el algoritmo para calcular la longitud del texto	
		3:
			//Se desceribe la operación a realizar
			Imprimir "Calcular la Longitud del Texto"
			
			//Se pide al usuario que escriba
			Imprimir "Ingrese el texto para calcular su longitud y presione Enter: "
			
			//Se asigna la cadena de texto a una variable para ejecutar la función
			Leer text
			
			//Función que cuenta caracteres y retorna un número
			Imprimir "El texto tiene una longitud de ",Longitud(text)," caracteres."
		De Otro Modo:
			
			//Si el usuario elige un número que no está entre las opciones
			Imprimir "Solamente puede elegir una opción del 1 al 3"
	FinSegun
FinAlgoritmo


## Week challenges (Wednesday) 💻

1. [Multiplication Tables](./challenges/e04/desc)

### SOLUTION

	Algoritmo Multiplication_Tables
		Imprimir "====== Tablas de Multiplicación ======'
		Imprimir 'Elija la tabla que quiere aprender:'
		Leer tabla
		Segun tabla Hacer
			1:
				Imprimir 'Tabla del 1'
				Imprimir '1 *  1 =  1'
				Imprimir '1 *  2 =  2'
				Imprimir '1 *  3 =  3'
				Imprimir '1 *  4 =  4'
				Imprimir '1 *  5 =  5'
				Imprimir '1 *  6 =  6'
				Imprimir '1 *  7 =  7'
				Imprimir '1 *  8 =  8'
				Imprimir '1 *  9 =  9'
				Imprimir '1 * 10 = 10'
			2:
				Imprimir 'Tabla del 2'
				Imprimir '2 *  1 =  2'
				Imprimir '2 *  2 =  4'
				Imprimir '2 *  3 =  6'
				Imprimir '2 *  4 =  4'
				Imprimir '2 *  5 = 10'
				Imprimir '2 *  6 = 12'
				Imprimir '2 *  7 = 14'
				Imprimir '2 *  8 = 16'
				Imprimir '2 *  9 = 18'
				Imprimir '2 * 10 = 20'
			3:
				Imprimir 'Tabla del 3'
				Imprimir '3 *  1 =  3'
				Imprimir '3 *  2 =  6'
				Imprimir '3 *  3 =  9'
				Imprimir '3 *  4 = 12'
				Imprimir '3 *  5 = 15'
				Imprimir '3 *  6 = 18'
				Imprimir '3 *  7 = 21'
				Imprimir '3 *  8 = 24'
				Imprimir '3 *  9 = 27'
				Imprimir '3 * 10 = 30'
			4:
				Imprimir 'Tabla del 4'
				Imprimir '4 *  1 =  1'
				Imprimir '4 *  2 =  8'
				Imprimir '4 *  3 = 12'
				Imprimir '4 *  4 = 16'
				Imprimir '4 *  5 = 20'
				Imprimir '4 *  6 = 24'
				Imprimir '4 *  7 = 28'
				Imprimir '4 *  8 = 32'
				Imprimir '4 *  9 = 36'
				Imprimir '4 * 10 = 40'
			5:
				Imprimir 'Tabla del 5'
				Imprimir '5 *  1 =  5'
				Imprimir '5 *  2 = 10'
				Imprimir '5 *  3 = 15'
				Imprimir '5 *  4 = 20'
				Imprimir '5 *  5 = 25'
				Imprimir '5 *  6 = 30'
				Imprimir '5 *  7 = 35'
				Imprimir '5 *  8 = 40'
				Imprimir '5 *  9 = 45'
				Imprimir '5 * 10 = 50'
			6:
				Imprimir 'Tabla del 6'
				Imprimir '6 *  1 =  1'
				Imprimir '6 *  2 = 12'
				Imprimir '6 *  3 = 18'
				Imprimir '6 *  4 = 24'
				Imprimir '6 *  5 = 30'
				Imprimir '6 *  6 = 36'
				Imprimir '6 *  7 = 42'
				Imprimir '6 *  8 = 48'
				Imprimir '6 *  9 = 54'
				Imprimir '6 * 10 = 60'
			7:
				Imprimir 'Tabla del 7'
				Imprimir '7 *  1 =  7'
				Imprimir '7 *  2 = 14'
				Imprimir '7 *  3 = 21'
				Imprimir '7 *  4 = 28'
				Imprimir '7 *  5 = 35'
				Imprimir '7 *  6 = 42'
				Imprimir '7 *  7 = 49'
				Imprimir '7 *  8 = 56'
				Imprimir '7 *  9 = 63'
				Imprimir '7 * 10 = 70'
			8:
				Imprimir 'Tabla del 8'
				Imprimir '8 *  1 =  8'
				Imprimir '8 *  2 = 16'
				Imprimir '8 *  3 = 24'
				Imprimir '8 *  4 = 32'
				Imprimir '8 *  5 = 40'
				Imprimir '8 *  6 = 48'
				Imprimir '8 *  7 = 56'
				Imprimir '8 *  8 = 64'
				Imprimir '8 *  9 = 72'
				Imprimir '8 * 10 = 80'
			9:
				Imprimir 'Tabla del 9'
				Imprimir '9 *  1 =  9'
				Imprimir '9 *  2 = 18'
				Imprimir '9 *  3 = 27'
				Imprimir '9 *  4 = 36'
				Imprimir '9 *  5 = 45'
				Imprimir '9 *  6 = 54'
				Imprimir '9 *  7 = 63'
				Imprimir '9 *  8 = 72'
				Imprimir '9 *  9 = 81'
				Imprimir '9 * 10 = 90'
			10:
				Imprimir 'Tabla del 10'
				Imprimir '10 *  1 =  10'
				Imprimir '10 *  2 =  20'
				Imprimir '10 *  3 =  30'
				Imprimir '10 *  4 =  40'
				Imprimir '10 *  5 =  50'
				Imprimir '10 *  6 =  60'
				Imprimir '10 *  7 =  70'
				Imprimir '10 *  8 =  80'
				Imprimir '10 *  9 =  90'
				Imprimir '10 * 10 = 100'
			De Otro Modo:
				Imprimir 'Solamente podemos imprimir las tablas del 1 al 10'
		FinSegun
	FinAlgoritmo


2. [Simple Calculator with Do While](./challenges/e05/desc)

### SOLUTION

// Algoritmo para una calculadora que sigue hasta que el usuario decide salir
Algoritmo Calculadora_Do_While
		// Despliegue de texto para describir el proceso del algoritmo 
	Imprimir '====== Simple Calculator ======'
		
	//Se utiliza el comando Repetir Hasta Que 
	Repetir
			
		//Solicitud de ingreso de los números 1 y 2, asignación de los valores a la variable correspondiente
		Imprimir 'Escriba el primer número:'
		Leer Numero1
		Imprimir 'Escriba el segundo número:'
		Leer Numero2
		
		//Solicitud de selección de la operación
		Imprimir 'Qué operación quiere hacer?: + . - . * . / '
		Leer op
		
		//Se ejecuta un caso de acuerdo a la operación seleccionada
		Segun op Hacer
			
			//Para la Suma
			"+" :
				Imprimir "Sumar"
			//Se anuncia la operación y se ejecuta, presentando el resultado como texto
				Imprimir "Procesando: ",Numero1," " op," " Numero2
				Imprimir "Resultado: " + ConvertirATexto(Numero1+Numero2)
				
			//Para la Resta
			"-" :
				Imprimir "Restar"
				//Se anuncia la operación y se ejecuta, presentando el resultado como texto
				Imprimir "Procesando: ",Numero1," " op," " Numero2
				Imprimir "Resultado: " + ConvertirATexto(Numero1-Numero2)
				
			//Para la Multiplicación	
			"*" :
				Imprimir "Multiplicar"
				//Se anuncia la operación y se ejecuta, presentando el resultado como texto
				Imprimir "Procesando: ",Numero1," " op," " Numero2
				Imprimir "Resultado: " + ConvertirATexto(Numero1*Numero2)
				
			//Para la División
			"/" :
				Imprimir "Dividir"
				//Validamos que el divisor no sea 0 y se anuncia que la operación no es válida
				Si Numero2==0
					Imprimir "Error: la división entre 0 no está definida"
				SiNo
					//Se anuncia la operación y se ejecuta, presentando el resultado como texto
					Imprimir "Procesando: ",Numero1," " op," " Numero2
					Imprimir "Resultado: " + ConvertirATexto(Numero1/Numero2)
				FinSi
				
				//Si el usuario selecciona un operador distinto a los de la lista
			De Otro Modo:
				Imprimir "Operación no definida"
		FinSegun
		Imprimir '¿Desea realizar otro cálculo?: Si / No'
		Leer continuar
	Mientras Que continuar == 'Si' | continuar == 'si' | continuar = 'sI' | continuar == 'SI' | continuar== 'S' | continuar == 's'
FinAlgoritmo	

## Week challenges (Thursday) 💻
1. [Multiplication Tables with For](./challenges/e07/desc)

### SOLUTION

		// For this challenge you will create a program to calculate the multiplication tables for a given number using the For(Para) loop. 
		// The user must enter a number and then the multiplication table for the number must be printed.

		//Solicitaremos al usuario el número de la tabla que quiere desplegar

		Algoritmo Tablas_de_Multiplicar_con_For
			Imprimir '====== Tablas de Multiplicación del 1 al 10 ======'
			Imprimir '¿Qué la tabla quieres calcular?'
			Leer tabla // Asignamos el número de la tabla elegida en la variable tabla.
			Imprimir 'La Tabla del ' + ConvertirATexto(tabla) // Agregamos la cadena de texto que describa la acción.
			Para iterador <- 1 Hasta 10 Con Paso 1 Hacer // Por medio del ciclo 'For' definimos operación del 1 al 10.
				Imprimir ConvertirATexto(tabla) ' * ' + ConvertirATexto(iterador) + ' = ' ConvertirATexto(tabla * iterador) // Se realiza ciclo iterativo de multiplicar e imprimir cadena.
			Fin Para
		FinAlgoritmo
		
		![image](https://user-images.githubusercontent.com/117490820/209340072-f3d730f2-2791-44a7-b876-f4d943e6fee9.png)


2. [Ascending and Descending Numbers](./challenges/e06/desc)

For this challenge we are going to print numbers in ascending or descending order. The user must enter a number, then he must enter if he wants to print the numbers in ascending or descending order. If the user chooses ascending, the numbers will be printed from the number 0 to the number entered, otherwise the numbers will be printed descending from the number entered to the number 0.To solve this challenge remember to use the For(Para) loop.

### SOLUTION

		Algoritmo Ascendente_o_Descendente
				Imprimir '===== Números en orden Ascendente o Descendente =====' // Despliega mensaje de lo que hace el programa.
				Imprimir 'Escriba un número:' // Despliega mensaje solicitando un número.
				Leer num // Asigna el valor ingresado a la variable num.
				Imprimir 'Operaciones disponibles:' // Despliega mensaje indicando que se debe elegir una opción.
				Imprimir '1. Imprimir Ascendente de 0 a ',num // Despliega mensaje que define opción de lista ascendente.
				Imprimir '2. Imprimir Descendente de ',num,' a 0' // Despliega mensaje que define opción de lista descendente.
				Imprimir 'Ingrese operacion a ejecutar' // Despliega mensaje que espera selección del usuario.
				Leer opcion // Asigna selección de usuario a variable opcion.
				Segun opcion Hacer // Se define el ciclo iterativo 'For' según la operación seleccionada.
					1: // Caso de opción Ascendente.
						Para iterador <- 0 Hasta num Con Paso 1 Hacer
							Imprimir ConvertirATexto(iterador)
						Fin Para
					2: // Caso de opción Descendente.
						Para iterador <- num Hasta 0 Con Paso -1 Hacer
							Imprimir ConvertirATexto(iterador)
						Fin Para
					De Otro Modo:
						Imprimir 'Esa opción no existe, seleccione de la lista.' // Se despliega si el usuario elige una opción distinta a 1 o 2.
				Fin Segun
		FinAlgoritmo
		
		![image](https://user-images.githubusercontent.com/117490820/209342392-c5b6ca7e-3d55-45bc-b99c-d631d9ffbf4d.png)
		![image](https://user-images.githubusercontent.com/117490820/209342432-f50cf5f8-e0e0-4263-b514-a6f73f44cc8c.png)
		![image](https://user-images.githubusercontent.com/117490820/209342478-70fce995-619c-4897-bc79-627f2d240694.png)



3. [Greetings](./challenges/e08/desc)

### SOLUTION

For this challenge, you need to create a program that prints a greeting based on an hour entered. The program should do the following:

Print Buenos dias! if the hour is from 0 to 12
Print Buenas tardes! if the hour is from 13 to 18
Print Buenas noches! if the hour is from 19 to 23
Ask the user if he wants to perform another greeting. If the answer is Si, the program must start again.
At the end of the program, print out the number of times the program has greeted.

		Algoritmo Saludos
			Imprimir '===== Saludos =====' // Despliega el mensaje de bienvenida del programa.
			Definir continuar Como Cadena // Define variable para poder continuar  salir del ciclo.
			Definir contar_saludos Como Entero // Define variable de conteo de saludos.
			contar_saludos <- 0 // Inicializa la variable de conteo de saludos con valor 0.
			continuar <- 'Si' // Inicializa la variable de verificación de salida con valor 'Si'.
			Mientras continuar == 'Si' Hacer // Verifica que la variable de verificación de salida permita continuar el ciclo iterativo.
				Imprimir 'Escriba la hora (en formato 0-23):' // Solicita al usuario escribir la hora para definir saludo.
				Leer hora // Asigna la hora a la variable correspondiente.
				Si hora <= 12 Entonces // El ciclo iterativo valida la opción de saludo matutino.
					Imprimir '¡Buenos días!' // Despliega mensaje para saludo matutino.
				SiNo 
					Si hora <= 18 Entonces // Se valida la opción de saludo vespertino.
						Imprimir '¡Buenas tardes!' // Despliega mensaje de saludo vespertino.
					SiNo
						Imprimir '¡Buenas noches!'// Despliega mensaje de saludo nocturno.
					Fin Si
				Fin Si

				contar_saludos <- contar_saludos + 1 // Agrega una unidad (1) al contador de saludos por cada ciclo realizado.

				Imprimir 'Desea continuar ? Si/No' // Verifica por medio de selección si se continúa el ciclo o se sale.
				Leer continuar // Asigna el input a la variable continuar (ver línea inicial ciclo Mientras).
			Fin Mientras

			Imprimir 'Cantidad de Saludos realizados: ' + ConvertirATexto(cantidadSaludos) // Al finalizar, despliega conteo total de saludos.
		FinAlgoritmo
		![image](https://user-images.githubusercontent.com/117490820/209344320-0bb520af-805a-41dc-8a7d-fc5898b5ce1f.png)


## Week links 🔗

### Videos

1. [Coding Basics: Switch Statements](https://www.youtube.com/watch?v=wxds6MAtUQ0)
2. [Intro to Programming: Loops](https://www.youtube.com/watch?v=wxds6MAtUQ0)
3. [Coding Basics: While Loops & Do While Loops](https://www.youtube.com/watch?v=v-K-4KuA8mQ)

### Articles

1. [JavaScript Loops Explained: For Loop, While Loop, Do...while Loop, and More](https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/)

## Session links 🔗
