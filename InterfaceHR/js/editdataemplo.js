function showEditDataDisplay(id,name,lastname,number,mail,address) {
    var tableDisplay = document.querySelector('#table');
    tableDisplay.innerHTML = '';
    var htmlString = `
    <div class="addemployee">
        <div class="adddatasubtitle">
            <span>Editar Datos</span>
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
                <button id="add">Editar</button>
            </div>
        </div>
    </div>
    `;
    tableDisplay.innerHTML = htmlString;

    document.getElementById('input-name').value = name;
    document.getElementById('input-lastname').value = lastname; 
    document.getElementById('input-number').value = number;
    document.getElementById('input-mail').value = mail; 
    document.getElementById('input-address').value = address;

    //FUNCION PARA REGRESAR A LA PANTALLA PRINCIPAL DEL SISTEMA
    const btncancel = document.querySelector('#canceladd');
    btncancel.addEventListener('click', function () {
        window.location.href = "../html/hrsystem.html";
    });
}