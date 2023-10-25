window.onload = init;

function init (){
    if (!localStorage.getItem("token")) {
        document.querySelector('#btn-secondary').addEventListener('click', function () {
            window.location.href = "./signin.html";
        });
    
        document.querySelector('#btn-primary').addEventListener('click', login);    
    }
    else{
        window.location.href = "hrsystem.html"
    }
}

//Funcion para iniciar sesion
function login() {
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value; 

     axios({
        method: 'post',
        url:'http://localhost:3000/hruser/login',
        data:{
            hruser_mail: mail,
            hruser_password: pass
        }
     }).then(function (res) {
        if (res.data.code === 200) {
            localStorage.setItem("token", res.data.message);
            localStorage.setItem("hruserid", res.data.hruserid);
            window.location.href = "hrsystem.html";
        } else{
            mail.value = '';
            pass.value = '';
            alert(res.data.message);
        }
     }).catch(function (err) {
        console.log(err);
     })
}