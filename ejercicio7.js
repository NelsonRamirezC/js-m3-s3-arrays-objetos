const usuario = {
    nombre: "Pedro",
    apellido: "Pereira",
    nombreUsuario: "pedro.pereira90",
    genero: "M",
    telefono: "+5697123659",
    correo: "pedro.pereira90@gmail.com",
    "fecha-nacimiento": "01-03-1990"
};

//notación de punto
//console.log(usuario.correo);
//notación de corchete
//console.log(usuario["fecha-nacimiento"]);

//recorrer propiedad y valores de un objeto

//cambiar el valor de una llave dentro del objeto
usuario.apellido = "Godoy";

for (const key in usuario) {
    console.log(key, ": ", usuario[key]);
}