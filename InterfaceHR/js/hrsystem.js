window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init (){
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token");
        headers = {
            headers: {
                'Authorization':"bearer " + localStorage.getItem("token")
            }
        }
        //ESTO ESTA EN EL ARCHIVO INITIAL DATA
        loadHRuserdata();
        loadAllEmployees();
    }
    else{
        window.location.href = "./index.html";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    //BOTON PARA BUSCAR EMPLEADOS POR SUS NOMBRES
    const btnsearch = document.querySelector('#search');
    btnsearch.addEventListener('click', function () {
        filterdata();
        document.getElementById('namefilter').value = "";
    });
    //BOTON PARA CERRAR SESION Y ELIMINAR EL TOKEN DEL LOCAL STORAGE
    const btnlogout = document.querySelector('#close');
    btnlogout.addEventListener('click', function () {
        window.location.href = "../index.html";
        localStorage.removeItem("token");
        localStorage.removeItem("hruserid");
    })
    //BOTON PARA CAMBIAR AL REGISTRO DE EMPLEADOS
    const btnaddemployee = document.querySelector('#addregister');
    btnaddemployee.addEventListener('click', function(){
        showAddDataDisplay();
    })
});