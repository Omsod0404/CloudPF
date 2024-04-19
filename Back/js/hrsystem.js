window.onload = init;
var headers = {};
//Servidor
var url = "http://localhost:3000";

function init (){
    loadAllEmployees();
}

document.addEventListener('DOMContentLoaded', function () {
    //Boton para buscar a los empleados por su nombre
    const btnSearch = document.querySelector('#search');
    btnSearch.addEventListener('click', function () {
        filterData();
        document.getElementById('namefilter').value = "";
    });

    //Boton para agregar registros
    const btnAddEmployee = document.querySelector('#addregister');
    btnAddEmployee.addEventListener('click', function(){
        showAddDataDisplay();
    });
});