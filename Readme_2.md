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

	T & T = T
	T & F = F
	F & T = T
	F & F = F
	T | T = T
	T | F = F
	F | T = T
	F | F = F
	~T = T
	~F = T
	(T & F) | (~F) = T
	(T | F ) & (F | F) = T
	~((T | F ) & (F | F)) & F = T
	~((T | F ) & (F | F)) & T = F

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

## Challenge 3:

### Identify odd and even numbers

	Remember the last challenge about the Mod operator? well, today your task will be to create a program that will be able to detect based on the user input if the number is odd or even. The process should be the following:

	The user enters a number
	Your algorithm detects if the number is odd or even (remember to use conditional statements Si...Entonces)
	Print ‘Número: x es par’ if the number is even (x is the number the user enters)
	Print ‘Número: x es impar’ if the number is odd (x is the number the user enters)
	
