window.onload = init;

function init (){
    if (!localStorage.getItem("token")) {
        document.querySelector('#btn-secondary').addEventListener('click', function () {
            window.location.href = "./login.html";
        });
    
        document.querySelector('#btn-primary').addEventListener('click', signin);        
    }
    else{
        window.localtion.href = "./hrsystem.html";
    }
}

function signin() {
    var name = document.getElementById('input-name').value;
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value; 

     axios({
        method: 'post',
        url:'http://localhost:3000/hruser/signin',
        data:{
            hruser_name: name,
            hruser_mail: mail,
            hruser_password: pass
        }
     }).then(function (res) {
        alert("Registro exitoso");
        window.location.href = "./login.html";
     }).catch(function (err) {
        console.log(err);
     })
}