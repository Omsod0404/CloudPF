//Funcion para mostrar el display para agregar un empleado
function showAddDataDisplay() {
    var tableDisplay = document.querySelector('#table');
    tableDisplay.innerHTML = '';
    var htmlString = `
    <div class="addemployee">
        <div class="adddatasubtitle">
            <span>Agregar Empleado</span>
        </div>
        <div class="adddataform">
            <div class="adddata">
                <label for="input-name">Nombre:</label>
                <input type="text" id="input-name" placeholder="Nombre(s) del emplado">
                <label for="input-lastname">Apellidos:</label>
                <input type="text" class="form-control" id="input-lastname" placeholder="Apellido(s) del empleado">
            </div>
            <div class="adddata">
                <label for="input-number">Teléfono:</label>
                <input type="text" id="input-number" placeholder="Teléfono del empleado">
                <label for="input-mail">Correo:</label>
                <input type="text" class="form-control" id="input-mail" placeholder="Correo del empleado">
            </div>
            <div class="adddata">
                <label for="input-address">Dirección:</label>
                <input type="text" id="input-address" placeholder="Dirección del emplado">
            </div>
            <div class="adddataactions">
                <button id="canceladd">Cancelar</button>
                <button id="add">Agregar</button>
            </div>
        </div>
    </div>
    `;
    tableDisplay.innerHTML = htmlString;

    const btnCancel = document.querySelector('#canceladd');
    btnCancel.addEventListener('click', function () {
        window.location.href = "../html/hrsystem.html";
    });

    const btnAdd = document.querySelector('#add');
    btnAdd.addEventListener('click', function () {
        addEmployee();
    })

    //Funcion para ejecutar el post, agregar un empleado
    function addEmployee() {
        var name = document.getElementById('input-name').value;
        var lastanme = document.getElementById('input-lastname').value; 
        var number = document.getElementById('input-number').value;
        var mail = document.getElementById('input-mail').value; 
        var address = document.getElementById('input-address').value;
        var data = {
            employee_name: name, 
            employee_lastname: lastanme, 
            employee_number: number, 
            employee_mail: mail, 
            employee_address: address
        }
        axios.post(url + "/humanresources", data, headers)
        .then(function (res) {
            if (res.data.code === 201) {
                alert(res.data.message);
                window.location.href = "../html/hrsystem.html";
            } else{
                alert(res.data.message);
            }
         }).catch(function (err) {
            console.log(err);
         })
    }
}