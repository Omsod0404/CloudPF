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

//Funcion para registrar un usuario de recursos humanos
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
        if (res.data.code === 201) {
            alert(res.data.message);
            window.location.href = "./login.html";
        } else{
            alert(res.data.message);
        }
     }).catch(function (err) {
        console.log(err);
     })
}