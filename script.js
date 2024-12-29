function validateContactForm(){
    var name = document.forms["contactForm"]["nombre"].value;
    var email = document.forms["contactForm"]["email"].value;
    var mensaje = document.forms["contactForm"]["mensaje"].value;

    if(name == ""){
        alert("Falta completar el nombre")
        return false
    }
    if(email == ""){
        alert("Falta completar el email")
        return false
    }
    if(mensaje == ""){
        alert("Falta completar el mensaje")
        return false
    }   
}


document.addEventListener("DOMContentLoaded" , (event) => {fetch("camisetas.json").then((response)=> response.json()).then((data) => {
    const camisetasContainer = document.getElementById("camisetas-container");
    data.forEach(camiseta => {
        camisetasContainer.innerHTML += `
        <div class="card mx-3" style="width: 18rem;">
            <img src="${camiseta.image}" class="card-img-top" alt="${camiseta.title}">
            <div class="card-body m-2">
                <h5 id="titulo${camiseta.id}" class="card-title">${camiseta.title} ${camiseta.id}</h5>
                <p id="parrafoPrecio${camiseta.id}" class="card-text">Precio: $${camiseta.price} </p>
                <p id="parrafoTalles${camiseta.id}" class="card-text">Talles: ${camiseta.sizes}</p>
                <div id="descripcion${camiseta.id}" class = "container">
                    <output id="descText${camiseta.id}"  class = "descripcion my-3">  ${camiseta.descripcion} </output>
                </div>
                <div class="container">
                    <button id="botonCompra${camiseta.id}" class="btn btn-primary">Agregar al carrito</button>
                    <button onclick="mostrarMasInfo(${camiseta.id})" id="botonInfo${camiseta.id}" class="btn btn-secondary">+Info</button>
                </div>
             </div>  
        </div>
        `
    });
}).catch((error) => console.error("Error al obtener las camisetas:", error));});

function mostrarMasInfo(id){

    var cardTitle = document.getElementById("title" + id);
    var idString = id.toString();
    var idDescripcion = "descripcion" + id;
    var idText = "descText" + id;
    if(document.getElementById(idDescripcion).style.display == "block"){
        document.getElementById(idDescripcion).style.display = "none";
        document.getElementById(idText).style.display = "none";
    }else{
        document.getElementById(idDescripcion).style.display = "block";
        document.getElementById(idText).style.display = "block";
    }
}


