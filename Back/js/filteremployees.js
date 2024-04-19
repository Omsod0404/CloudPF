//Funcion para buscar a los empleados por su nombre
function filterData() {
    let name = document.getElementById('namefilter').value;
    
    axios.get(url+"/humanresources/"+name, headers)
    .then(function (res) {
        displayHRUserDataFiltered(res.data.message, name);
    }).catch(function (err) {
        console.log(err);
    })
}
//Funcion para desplegar los resultados de los datos filtrados en una tabla
function displayHRUserDataFiltered(employee, name) {
    const table = document.querySelector('#tableEmployees tbody');
    const divActions = document.getElementById('actionsrows');
    table.innerHTML = '';
    divActions.innerHTML = '';

    for (let i = 0; i < employee.length; i++) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${employee[i].employee_id}</td>
                        <td>${employee[i].employee_name}</td>
                        <td>${employee[i].employee_lastname}</td>
                        <td>${employee[i].employee_number}</td>
                        <td>${employee[i].employee_mail}</td>
                        <td>${employee[i].employee_address}</td>`;
        newRow.onclick = function() {
            selectRow(this);
        };
        table.appendChild(newRow);
    }

    if (name != "") {
        const subtitle = document.querySelector('.subtitle');
        subtitle.innerHTML = '';
        const newSubtitle = document.createElement('span');
        subtitle.innerHTML='<span>Datos filtrados</span>';
    }else{
        const subtitle = document.querySelector('.subtitle');
        subtitle.innerHTML = '';
        const newSubtitle = document.createElement('span');
        subtitle.innerHTML='<span>Todos los datos</span>';
    }

    //Funcion para seleccionar alguna fila de la tabla de los datos filtrados
    function selectRow(row) {
        var rows = document.getElementsByTagName('tr');

        for (var i = 0; i < rows.length; i++) {
            rows[i].classList.remove('selected');
        }

        row.classList.add('selected');
        const column1 = row.cells[0].textContent;
        const column2 = row.cells[1].textContent;
        const column3 = row.cells[2].textContent;
        const column4 = row.cells[3].textContent;
        const column5 = row.cells[4].textContent;
        const column6 = row.cells[5].textContent;

        showDeleteBtn(column1);
        showEditDataBtn(column1,column2,column3,column4,column5,column6);
    }

    //Funcion para mostrar el boton para eliminar la fila seleccionada
    function showDeleteBtn(id) {
        var btnDelete = document.createElement('button');
        btnDelete.textContent = 'Eliminar Fila';
        btnDelete.id = "deleteemployee";

        btnDelete.onclick = function() {
            deleteEmployee(id);
        };

        divActions.innerHTML = '';
        divActions.appendChild(btnDelete);
    }

    //Funcion para mostrar el boton para editar los datos de la fila seleccionada
    function showEditDataBtn(id,name,lastname,number,mail,address) {
        var btnEditData = document.createElement('button');
        btnEditData.textContent = 'Editar Datos';
        btnEditData.id = "editdata";

        btnEditData.onclick = function() {
            showEditDataDisplay(id,name,lastname,number,mail,address);
        };
        
        divActions.appendChild(btnEditData);
    }
}