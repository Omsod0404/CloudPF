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
        loadHRUserData();
        loadAllEmployees();
    }
    else{
        window.location.href = "./index.html";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    //Boton para buscar a los empleados por su nombre
    const btnSearch = document.querySelector('#search');
    btnSearch.addEventListener('click', function () {
        filterData();
        document.getElementById('namefilter').value = "";
    });

    //Boton para cerrar sesion y eliminar el token del localstorage
    const btnLogout = document.querySelector('#close');
    btnLogout.addEventListener('click', function () {
        window.location.href = "../index.html";
        localStorage.removeItem("token");
        localStorage.removeItem("hruserid");
    });

    //Boton para agregar registros
    const btnAddEmployee = document.querySelector('#addregister');
    btnAddEmployee.addEventListener('click', function(){
        showAddDataDisplay();
    });
});