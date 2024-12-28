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
    
}