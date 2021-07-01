/*
REGISTRO
Trabajador : cadena
Puesto : operario,Administrador,Gerente
Sueldo :
descuento 9.35%
Total

+ calcular el descuento
+ Total a cobrar.


*/

		    

function calculaPorcentajes(numero){
	document.getElementById("porcent9").value=Math.floor(-numero*9.35)/100;

	document.getElementById('sueldo').value=Math.floor(numero*9.35)/-100 - (-numero);

}

