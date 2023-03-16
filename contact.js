let submitButton = document.getElementById("submitButton");
let email = document.getElementById("mailContact");

submitButton.addEventListener('click', () => {

    let email = document.getElementById("mailContact").value
    let errorMsg = document.getElementById('error-msg');
   
    if (email === "" )  {
        return errorMsg.innerHTML = "Veuillez entrez votre addresse mail.";
    } else if (email === "email@gmail.com") {
        alert("Bienvenue à la newsletter de Bonsai & Co!");
        return errorMsg.innerHTML = "";
    }
    else {
        return errorMsg.innerHTML = "";
    }

});
