const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel=document.querySelector(".tel");

function cadastrar(){
   fetch("http://localhost:8080/cadastrar",
  {
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            name: Inome.value,
            email: Iemail.value,
            senha: Iemail.value,
            telefono:Itel.value,
        })

   })
     .then (function(res) {console.log(res) })
     .catch (function (res){console.log(res)})
};

function  limpar () {
    Inome.value = "";
    Iemail.value = "";
    Iemail.value = "";
    Itel.value = "";
}

formulario.addEventListener('submit',function (event) {

    event.preventDefault();
    
   /* cadastrar();
    limpar();*/
    console.log(Inome.value)
});

