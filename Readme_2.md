Week 2 Challenges

# WEDNESDAY

## Challenge 1:
![Screenshot 2022-12-01 at 10 22 37](https://user-images.githubusercontent.com/117490820/205112016-030da876-7a7e-44d7-8cca-ba1df3399e45.png)


## Challenge 2:
### Módulo - Número Par o Impar

Algoritmo Mod_Numero_Par_o_Impar
	
  Escribir 'Ingresar un número de dos dígitos'
	
    Leer X
	
    Y <- X%2
	
    Si Y=0 Entonces
	
      Imprimir Y ' Es el Módulo'
	
      Imprimir X ' - Es un número par'
	
      SiNo
	
      Imprimir Y ' Es el Módulo'
	
      Imprimir X ' - Es un número impar'
	
    FinSi

FinAlgoritmo

![image](https://user-images.githubusercontent.com/117490820/205112302-ba346937-b5f6-46dc-91bf-d38a58e6a096.png)


## Challenge 3:
### Formulario de Datos

Algoritmo Register_Form
	
    Imprimir 'Escriba los datos solicitados:'

    Imprimir 'Primer Nombre:'

    Leer name

    Imprimir 'Primer Apellido:'

    Leer lastname

    Imprimir 'Edad:'

    Leer age

    Imprimir 'Dirección de correo electrónico:'

    Leer email

    Imprimir 'Dirección postal: '

    Leer address

    Limpiar Pantalla

    Imprimir '========== DATOS DE USUARIO =========='

    Imprimir name

    Imprimir lastname

    Imprimir age

    Imprimir email

    Imprimir address

    Imprimir '====================================='
	
FinAlgoritmo

![image](https://user-images.githubusercontent.com/117490820/205112640-526b72a8-3198-45e3-b8c5-d648acceacea.png)

![image](https://user-images.githubusercontent.com/117490820/205112735-1c3fa22c-6063-4791-84cb-7946e7d0fc02.png)


# THURSDAY

## Challenge 1:

### Truth Tables

	Add the Truth Tables for each of the operations add them to your README and check if the following operations are correct by answering ✅ or ❌ at the end of each operation

	Operations:

	Remember that AND can be represented by &

	Remember that OR can be represented by |

	Remember that NOT can be represented by ~

	1. T & T = T ✅ 
	2. T & F = F  ✅
	3. F & T = T  ❌
	4. F & F = F  ✅
	5. T | T = T ✅ 
	6. T | F = F ✅
	7. F | T = T ✅ 
	8. F | F = F  ✅
	9. ~T = T  ❌
	10. ~F = T ✅
	11. (T & F) | (~F) = T ✅ 
	12. (T | F ) & (F | F) = T  ❌
	13. ~((T | F ) & (F | F)) & F = T  ❌
	14. ~((T | F ) & (F | F)) & T = F  ❌

### SOLUTION
	Algoritmo Truth_Tables
	F <- Falso 
	T <- Verdadero
	Imprimir '1. T & T = T : ' T&T
	Imprimir '2. T & F = F : ' T&F
	Imprimir '3. F & T = T : ' F&T 
	Imprimir '4. F & F = F : ' F&F
	Imprimir '5. T | T = T : ' T|T
	Imprimir '6. T | F = F : ' T|F
	Imprimir '7. F | T = T : ' F|T
	Imprimir '8. F | F = F : ' F|F
	Imprimir '9. ~T = T : ' ~T
	Imprimir '10. ~F = T : ' ~F
	Imprimir '11. (T & F) | (~F) = T : ' (T&F)|(~F)
	Imprimir '12. (T | F ) & (F | F) = T : ' (T|F)&(F|F)
	Imprimir '13. ~((T | F ) & (F | F)) & F = T : ' ~((T&F)&(F|F))&F
	Imprimir '14. ~((T | F ) & (F | F)) & T = F : ' ~((T|F)&(F|F))&T
FinAlgoritmo
![image](https://user-images.githubusercontent.com/117490820/205199548-f3f7ff73-3d61-42e9-b14f-a06b9ca96600.png)



## Challenge 2:

### Boolean Results

	You have been assigned to verify and explain a code created by one of your colleagues, the idea is that you can describe the value that each variable has within the code as well as what was done for each line. What is expected of you is that you add comments below each line showing the value that the variable would have and a short explanation of how that value is reached.

	This is the code:

	Algoritmo boolean
		a <- 5 == 3
		b <- 4 <> 3
		c <- 7 > 7
		d <- 4 < 4
		e <- 100 <= 90
		f <- 40 >= 40
	FinAlgoritmo

### SOLUTION:
	Algoritmo Boolean_Results
	a <- 5 == 3
	// Variable a gets a Boolean result of False assigned, from evaluating if 5 is equal to 3
	b <- 4 <> 3
	// Variable b gets a Boolean result of True assigned, from evaluating if 4 is different (not equal to) 3
	c <- 7 > 7
	// Variable c gets a Boolean result of False assigned, from evaluating if 7 is greater than 7
	d <- 4 < 4
	// Variable d gets a Boolean result of False assigned, from evaluating if 4 less than 4
	e <- 100 <= 90
	// Variable e gets a Boolean result of False assigned, from evaluating if 100 less or equal to 90
	f <- 40 >= 40
	// Variable f gets a Boolean result of True assigned, from evaluating if 40 greater or equal to 40
	// Following print commands display the Boolean value of each variable, preceded by the text description of each variable.
	Imprimir 'Variable a es: ',a
	Imprimir 'Variable b es: ',b
	Imprimir 'Variable c es: ',c
	Imprimir 'Variable d es: ',d
	Imprimir 'Variable e es: ',e
	Imprimir 'Variable f es: ',f
FinAlgoritmo

![image](https://user-images.githubusercontent.com/117490820/205189784-097e7d64-378d-4075-90fe-06290b673eaa.png)


## Challenge 3:

### Identify odd and even numbers

	Remember the last challenge about the Mod operator? well, today your task will be to create a program that will be able to detect based on the user input if the number is odd or even. The process should be the following:

	The user enters a number
	Your algorithm detects if the number is odd or even (remember to use conditional statements Si...Entonces)
	Print ‘Número: x es par’ if the number is even (x is the number the user enters)
	Print ‘Número: x es impar’ if the number is odd (x is the number the user enters)
	
### SOLUTION:

	Algoritmo Identificar_Numero_Par_o_Impar
		Escribir 'Ingresar un número de dos dígitos'
		Leer X
		Y <- X%2
		Si Y=0 Entonces
			Imprimir 'El número ',X ' es un número par'
		SiNo
			Imprimir 'El número ',X ' es un número impar'
		FinSi
FinAlgoritmo

![image](https://user-images.githubusercontent.com/117490820/205189949-5dd18b30-42c8-499e-ac88-f4c6741310b7.png)


![image](https://user-images.githubusercontent.com/117490820/205189991-11da433b-d43e-400d-8875-55f8bfd2ea27.png)




FinAlgoritmo
