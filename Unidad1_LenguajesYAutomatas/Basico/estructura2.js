band = true;

do{

	let respuesta = prompt("¿CUAL ES TU CLIMA FAVORITO?");
	switch (respuesta){
		case "LLUVIA":
		alert("RECUERDA LLEVAR UN PARAGUAS");
		break;
		case "SOL":
		alert("RECUERDA LLEVAR ROPA LIGERA");
		break;
		case "NUBLADO":
		alert("SAL A PASEAR");
		break;
		default:
		band = false;

}
}while (band);
alert("ADIOS...");