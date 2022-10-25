let checkbox = document.getElementById("checkboxterms");

(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          validar()
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


function validar(){
  // valida clave
let clave = document.getElementById("password1").value;
let clave2 = document.getElementById("password2").value;
let html = "";

if (clave !== clave2 && clave2 !== ""){
  
  html += `
  Debe ser igual a "contraseña".
  ` 
} document.getElementById("alertapw").innerHTML = html

if (clave2 === ""){
  html += `
  El campo NO debe estar vacío.
  `
} document.getElementById("alertapw").innerHTML = html

// valida terminos 

let btn = document.getElementById('terminosbtn');
let feedback = document.getElementById("feedback");

// si esta checked NO muestra texto en rojo
if (checkbox.checked == true ){
  btn.classList.remove("text-danger")
  feedback.classList.add("text-success","d-none")

// si esta checked SI muestra texto en rojo
} else {
  btn.classList.add("text-danger")
  feedback.classList.remove("d-none")
  feedback.classList.add("text-danger")
}
}

checkbox.addEventListener("click", function(){
  validar()
})


