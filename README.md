# core-code-from-scratch-readme
core-code-from-scratch-readme

====================================================================================

Pizza de Salchicha Italiana

Ingredientes

  Para la masa
  
		1 1/2 tazas de agua water
		1 paquete (2 1/4 cucharaditas) de levadura
		3 3/4 tazas de harina
		2 cucharaditas de aceite de oliva extra-virgen
		2 cucharaditas de sal
		1 cucharadita de azúcar

Ingredientes y toppings de la pizza

		Aceite de Oliva extra-virgen
		Salsa de tomate
		Queso (de los tipos que prefiera)
		Champiñones
		Chile pimiento en rodajas (sin semillas)
		Salchicha italiana cocinada y en pedacitos (o rodajas)
		Aceitunas negras en rodaja
		Arúgula
		Salsa Pesto
		Pepperoni en rodajas
		Cebollas en rodaja
		Jamón (rodajas finas, cortadas en trocitos)


Preparación

1. Haga la masa con los ingredientes indicados
2. Estire la masa en el molde y forme orilla
3. Ponga la salsa de tomate sobre la masa estirada
4. Ponga el queso sobre la salsa (suficiente para cubrirla)
5. Ponga los demás ingredientes a su gusto sobre el queso
6. Hornear
7. Sacar del horno y partir
8. DEGUSTAR!!!

====================================================================================

====================================================================================

Hot N Cold

Convertir una temperatura en grados Centígrados a Fahrenheit 

1. Preguntar la temperatura y definir la escala (Celsius o Fahrenheit)
2. Obtener la temperatura en la escala correspondiente
3. Utilizar la fórmula de conversión (ºC * 9/5) +32 para convertir de ºC a ºF
4. Utilizar la fórmula de conversión (ºF-32) * .5556
5. Aplicar la fórmula que corresponda  y presentar el resultado

====================================================================================

====================================================================================

Some Geometry
Design an algorithm to calculate the volume of a pyramid, a cube and a sphere


1. Investigar las fórmulas
2. Declarar las fórmulas:
3. 	Pirámide: 1/3 × Largo de la Base × Ancho de la Base × Altura de la pirámide
4. 	Cubo: Tamaño de un lado elevado al cubo (a^3)
5. 	Esfera:4/3(∏r^2)
6. Preguntar la figura cuya área se desea calcular
7. Una vez elegida, preguntar las variables según la figura:
8. 	Pirámide: medida de largo y ancho de la base, medida de la altura de la pirámide
9. 	Cubo: largo de un lado
10. 	Esfera: medida del radio de la esfera
11. Con los datos solicitados, aplicar la fórmula correspondiente
12. Desplegar el resultado
13. Preguntar si se desea calcular otra área diferente o el área de otra figura
====================================================================================	


Algorithms Session - November 24th

Hay dos hombres. 
Uno de ellos lleva una camisa roja y el otro lleva una camisa azul.
Los dos hombres se llaman Andrew y Bob, pero no sabemos cuál es Andrew y cuál es Bob.
EL chico de la camisa azul dice: "Soy Andrew"
El chico de la camisa roja dice: "Soy Bob"
Si sabemos que al menos uno de ellos mintió, ¿qué color de camisa lleva Andrew?

Premisas:
1 uno de ellos miente: como no sabemos quién, podemos asumir que ambos mienten.
2 Si el de camisa azul dice que es Andrew (mentira) y el de camisa roja dice que es Bob (también mentira) podemos deducir que Andrew trae camisa roja.


Segundo problema: Las 3 cajas y el automóvil
Hay tres cajas y exactamente una de ellas tiene un automóvil. Puedes quedarte con el auto si eliges la caja correcta
En cada caja hay un enunciado, solamente uno dice la verdad:
1 Caja 1: El auto está en esta caja
2 Caja 2: El auto no está en esta caja
3 Caja 3: El auto no está en la caja 1

Resolución: 
1 Asumiendo que la caja 1 dice la verdad: Se contradicen 1 y 2
2 Asumiento que la caja 2 dice la verdad: Se contradicen 1 y 3
3 Asumiento que la caja 3 dice la verdad: Auto en la caja 2

==================
Challenges
==================
1 Numbers
Description
Design an algorithm to check if a number is even or odd. If it is even, write that it is even, otherwise write that it is odd. Represent the algorithm in a flowchart.

Expected output
A graph showing the steps to verify if a number is even or odd

SOLUTION
1. Ask for a number
2. Divide the number by 2, if the quotient is an integer, then write "Even Number", else write "Odd number"
3. ![image](https://user-images.githubusercontent.com/117490820/204202504-47e6b630-2719-42c4-a124-2fc661b7ab90.png)


===============
2 How old are you 👴
Description
Write pseudocode for an algorithm that calculates the age of a person based on date of birth

Expected output
A sequence that tells you how old is someone based on DOB

SOLUTION
1. Set date to "TODAY"
2. Ask for "Date of Birth"
3. Store as "DOB"
4. Subtract "DOB" from "TODAY" (TODAY - DOB)
5. Save the difference as "result"
6. Write the value stored in a sentence as "You are (result) years old"
7. End

===============
3 Find the treasure 👑
Description
We are in a room with three chests. We know that at least one has a treasure in it. Each chest has a message, but all the messages are lies.

Left chest: The middle chest has a treasure
Middle chest: All these chests have treasures in them
Right chest: Only one of these chests has treasures.

Which chests have treasures?

![image](https://user-images.githubusercontent.com/117490820/204203794-aa275821-eea7-467d-b5a0-af24fc6738ff.png)

SOLUTION
We know ALL messages are lies:

Left chest: The middle chest has a treasure => this is a lie. No treasure in the middle chest.
Middle chest: All these chests have treasures in them => this is a lie. This chest does not have a treasure (based on 1), but 1 and 3 might have a treasure.
Right chest: Only one of these chests has treasures => this is a lie. More than one can have a treasure.
If there is NO treasure in the middle, 1 or 3 may have a treasure, and more than one chest can have a treasure, then:
Chest A (left) and Chest C (right) have a trasure.


#===============
Week 2
Logic problem
Description
The teacher asks his 5 students if they studied mathematics yesterday.

Alice: "Nobody studied math yesterday".
Bob: "1 person studied math yesterday".
Charlie: "2 people studied math yesterday".
Dan: "3 people studied mathematics yesterday".
Eva: "4 people studied mathematics yesterday".

The teacher knows that only those who studied would be telling the truth and those who didn't would be lying. Who is telling the truth?

SOLUTION: No one can atest as to how many people studied other than themselves, to Alice, Charlie, Dan and Eva are lying, hence, Bob is telling the truth as he is referring to himself.

Answer: Bob is telling the truth.
#===============

===============
Tuesday, November 29 - Algorithms Session
WEEK 2 CHALLENGES

Week challenges (Tuesday) 💻
===============
Install PSeInt
![image](https://user-images.githubusercontent.com/117490820/204678065-2645f510-4bcb-49d6-b6ab-8ac9f3e2bfb3.png)

===============
Print my name
Algoritmo My_Name
MyName <- 'Josemiguel Dávila'	
Imprimir MyName	
FinAlgoritmo
![image](https://user-images.githubusercontent.com/117490820/204678426-38ac34ed-eae0-435f-b880-693456a69f73.png)


===============
Print my name & age
Algoritmo Name_and_Age
	Name <- 'Josemiguel Dávila'
	Age <- 47
	Imprimir Name
	Imprimir Age
FinAlgoritmo
![image](https://user-images.githubusercontent.com/117490820/204678582-4adc3111-da0a-4d2f-8850-faf95bb16e12.png)

