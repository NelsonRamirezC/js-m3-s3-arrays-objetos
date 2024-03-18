const peliculas = ["It 2", "Rambo 3", "Halloween", "Shaft"];

//siempre los array comienzan en 0
console.log(peliculas);

//cantidad de elementos dentro del array
console.log(peliculas.length);

console.log("Lista de películas que tengo:");
for (let index = 0; index < peliculas.length; index++) {
    //guardar el valor que tiene el array mientras se va iterando
    let pelicula = peliculas[index];
    //imprimir el nombre de la película en un literal template
    console.log(`${index+1}.- ${pelicula}.`);
};