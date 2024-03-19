let curso1 = {
    id: 0,
    nombre: "Curso HTML",
    modulos: ["introducción a HTML", "HTML semántico"],
};

let curso2 = {
    id: 1,
    nombre: "Curso CSS",
    modulos: ["Fundamentos CSS", "CSS avanzado"],
};

let curso3 = {
    id: 2,
    nombre: "Curso JavaScript",
    modulos: ["Fundamentos JavaScript", "JavaScript avanzado"],
};

let curso4 = {
    id: 3,
    nombre: "Curso Base de datos",
    modulos: ["Base de datos relacionales", "SQL"],
};

const cursos = [curso1, curso2, curso3, curso4];

let options = '<option value="">Elige un curso</option>';
for (const curso of cursos) {
    options += `<option value="${curso.id}">${curso.nombre}</option>\n`;
}

let selectElement = document.querySelector("#cursos");

selectElement.innerHTML = options;

let listaModulos = document.getElementById("listaModulos");
let resultado = document.getElementById("mostrarCurso")

selectElement.addEventListener("change", function (event) {
    resultado = document.getElementById("mostrarCurso");

    let curso = cursos[this.value];

    if (curso) {

        resultado.innerText = curso.nombre;

        console.log(curso.modulos);
        //CAPTURAR LISTA DE MÓDULOS

        let acumuladorModulos = "";

        for (const modulo of curso.modulos) {
            acumuladorModulos += `<li>${modulo}</li>`;
        }

        listaModulos.innerHTML = acumuladorModulos;
    }else {
        listaModulos.innerHTML = "";
        resultado.innerText = "";
    }
});
