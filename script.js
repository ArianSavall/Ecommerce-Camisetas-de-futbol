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

function getAllCamisetasFromJson(){
    fetch("camisetas.json").then((response)=> response.json()).then((data) => {
        const camisetasContainer = document.getElementById("camisetas-container");
        data.forEach(camiseta => {
            camisetasContainer.innerHTML += `
            <div class="card mx-3" style="width: 18rem;">
                        <img src="${camiseta.image}" class="card-img-top" alt="${camiseta.title}">
                        <div class="card-body m-2">
                        <h5 class="card-title">${camiseta.title}</h5>
                        <p class="card-text">Precio: $${camiseta.price} </p>
                        <p class="card-text">Talles: ${camiseta.sizes}</p>
                        <button class="btn btn-primary">Agregar al carrito</button>
                        <button class="btn btn-secondary">+Info</button>
                        </div>
                    </div>
            `
        });
    }).catch((error) => console.error("Error al obtener las camisetas:", error));
}