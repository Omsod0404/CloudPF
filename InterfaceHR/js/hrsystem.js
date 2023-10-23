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
        loadHRuserdata();
        loadAllEmployees();
    }
    else{
        window.location.href = "./index.html";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const btnsearch = document.querySelector('#search');
    btnsearch.addEventListener('click', function () {
        filterdata();
        document.getElementById('namefilter').value = "";
    });

    const btnlogout = document.querySelector('#close');
    btnlogout.addEventListener('click', function () {
        window.location.href = "../index.html";
        localStorage.removeItem("token");
        localStorage.removeItem("hruserid");
    })
});