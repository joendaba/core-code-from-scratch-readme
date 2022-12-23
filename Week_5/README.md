<h1 align="center">Pseudocode & Introduction to Javascript - Week 5</h1>

## Week goal 🏁

<p></p>

## Week subtopics

- Introduction to Javascript
    - What is Javascript
    - How Javascript is translated into machine code (just mention)
    - History of Javascript
    - Javascript Version
    - MDN documentation
    - How to run Javascript
    - Web (default)
    - Backend Runtime (node, deno...)

## Week challenges (Monday) 💻

1. [Time Converter](./challenges/e00/desc)

	### Solution
	
			Funcion resultado <- Convertidor (tiempo_en_segundos)
			// La función toma un número determinado de segundos ingresado por el usuario
			// y lo convierte en un texto que indica cuántos días, horas, minutos y segundos equivalen al número ingresado.

			Definir resultado Como Caracter; //La variable resultado es de tipo caracter para manipularla fácilmente.
			Definir dias, horas, minutos, seconds Como Entero; //Las variables de tiempo se definen como número entero.

				seconds =  tiempo_en_segundos % 60; //Al obtener el residuo de la división (monto/60) tenemos los segundos restantes.
				minutos = Trunc (tiempo_en_segundos/60) % 60; // Truncamos la división entre 60 para sacar los minutos y el residuo de 60 para sacar los minutos. 
				horas = Trunc (tiempo_en_segundos/3600) % 24; //Truncamos la división entre (60*60) y el residuo de 24 para sacar las horas. 
				dias = Trunc (tiempo_en_segundos/86400); // truncamos la división entre el total de segundos del día para sacar los días.
				resultado = Concatenar('Días: ', ConvertirATexto(dias)); // Se asigna a resultado el texto 'Días:' y los días convertidos a texto.
				resultado = Concatenar(resultado, ' horas: '); // Se asigna a resultado el texto concatenado y el texto 'horas:'.
				resultado = Concatenar(resultado, ConvertirATexto(horas)); // Se asigna a resultado el texto concatenado y las horas convertidas a texto.
				resultado = Concatenar(resultado, ' minutos: '); // Se asigna a resultado el texto concatenado y el texto 'minutos:'.
				resultado = Concatenar(resultado, ConvertirATexto(minutos)); // Se asigna a resultado el texto concatenado y los minutos convertidos a texto.
				resultado = Concatenar(resultado, ' segundos: '); // Se asigna a resultado el texto concatenado y el texto 'segundos:'.
				resultado = Concatenar(resultado, ConvertirATexto(seconds)); // Se asigna a resultado el texto concatenado y los segundos convertidos a texto.
			FinFuncion

			Algoritmo Convertidor_de_Tiempo //Este algoritmo hace una llamada a la función que establecimos anteriormente.
				Imprimir '====== Convertidor de Tiempo ======' //Deja saber al usuario el nombre de nuestro programa.
				Imprimir 'Ingresa una cantidad de segundos:' // Solicita al usuario que ingrese una cantidad en segundos.
				Leer tiempo_en_segundos //Asigna la cantidad ingresada por el usuario a una variable.
				Imprimir Convertidor(tiempo_en_segundos) // Pasa la variable a la función preparada con anterioridad e imprime el resultado.
			FinAlgoritmo


2. [Compare distances](./challenges/e01/desc/)

### SOLUTION

		// Create a function called compareDistances that asks for 5 numbers, these can be positive or negative, 
		// add the positives with positives and negatives with negatives, 
		// the function should return true if there is more distance to 0 with positives or 
		// false if the distance is greater with negatives .


		// Definiremos la función que solicite los números y los guarde en variables temporales para su manejo.
		// Se comparan si son mayores o menores que 0 y se suman al número ingresado.
		// Se devuelve un resultado FALSO o VERDADERO según el caso para el número mayor o menor con negativos o con positivos.
		Funcion resultado <- compareDistances ()
			Definir resultado Como Logico;
			Definir numero_positivo, numero_negativo Como Real;
			numero_positivo = 0;
			numero_negativo = 0;
			Para cuenta = 1 Hasta 5 Con Paso 1 Hacer
				Imprimir 'Escriba el valor ',cuenta,':'
				Leer numero_ingresado
				SI numero_ingresado > 0 Entonces
					numero_positivo = numero_positivo + numero_ingresado;
				SiNo
					numero_negativo = numero_negativo + numero_ingresado;
				FinSi
			FinPara
			resultado = numero_positivo > Abs(numero_negativo)
		FinFuncion


		// El algoritmo llama la función previamente definida y solicita que imprima o despliegue el resultado en pantalla.
		Algoritmo Compara_Distancias
				Imprimir  'Por favor escriba 5 valores enteros según se piden, pueden ser positivos o negativos.'
				Imprimir compareDistances()
		FinAlgoritmo

## Week challenges (Tuesday) 💻

1. End of month - Work on your README

## Week challenges (Wednesday) 💻
1. [Cashier](./challenges/e04/desc/)
2. [Weather average](./challenges/e05/desc/)

## Week challenges (Thursday) 💻
1. [If](./challenges/e06/desc)
2. [While](./challenges/e07/desc/)
3. [For](./challenges/e08/desc)

## Week links 🔗

## Session links 🔗
