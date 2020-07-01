//BOTON 1
function parImpar(){
	/*se empieza abriendo una ventana emergente
	pidiendo que se ingrese un numero */
	numero = parseInt(prompt("Ingrese un numero"));

	/*se usa una concidional para saber
	el modulo del resultado dividido entre 2 es igual a 0
	Si el residuo es 0, entonces quiere decir que es un numero par
	sino, es impar*/ 
	if (numero%2 == 0) {
		//codigo para imprimir en consola
		console.log("El numero es par");
	}else{
		console.log("El numero es impar");
	}
}



//BOTON 2
function ventanaModal(){
	// Get the modal
	var modal = document.getElementById("myModal");


	// When the user clicks the button, open the modal 
	document.getElementById("myBtn").onclick = function() {
	  modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	document.getElementsByClassName("close")[0].onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}
}


//BOTON 3
//Se hace una funcion para que aparezcan los campos para igresar los numeros
function numMayor(){
	/*Se usa el document.body.innerHTML para que escriba en el mismo archivo
	y no como el document.write que reescribe toda la pagina*/
	document.body.innerHTML += "<br><br>"+
	"<label>Ingresa el 1er numero: </label>"+
	"<input id='num1' type='number' ></input><br><br>"+
	"<label>Ingresa el 2do numero: </label>"+
	"<input id='num2' type='number' ></input><br><br>"+
	"<label>Ingresa el 3er numero: </label>"+
	"<input id='num3' type='number' ></input><br><br>"+
	"<input type='button' value='Enviar' onclick='numeroMayor();'> ";
}
//se hace una funcion para obtener los datos del formulario
function numeroMayor(){
	
	//se crean y se usa el getElementById para obtener los datos y a la vez guardarlos en la variable
	var num1 = parseInt(document.getElementById('num1').value);
	var num2 = parseInt(document.getElementById('num2').value);
	var num3 = parseInt(document.getElementById('num3').value);

	//se usa un ciclo condicional para validar los numeros y saber cual es mayor
		//se comparan primero los 3 para saber si se estan ingresando los mismos numeros
	if (num1 == num2 && num2 == num3) {
		//y se imprime el mensaje usando codigo html para que se imprima en un H2
		document.body.innerHTML += "<br><h2>Los 3 numeros son iguales</h2>";
	}
	//y ya apartir de aqui se comparan cada uno de los numeros para saber cual es el mayor de todos
	else if (num1>num2 && num1>num3) {
		document.body.innerHTML += "<br><h2>El numero "+num1+" es mayor</h2>";
	}
	else if (num2>num1 && num2>num3) {
		document.body.innerHTML += "<br><h2>El numero "+num2+" es mayor</h2>";
	}
	else if (num3>num1 && num3 > num2) {
		document.body.innerHTML += "<br><h2>El numero "+num3+" es mayor</h2>";
		//y por ultimo cualquier otra convinacion de numeros no valida o rara mandara un mensaje de error
	}else{
		document.body.innerHTML += "<br><h2>ERROR: 404</h2>";
	}
}



