let parrafos = document.querySelectorAll("p");

parrafos.forEach(function(parrafo){
    parrafo.addEventListener("click", function(event){
       this.style.color = "red";
    })
});


