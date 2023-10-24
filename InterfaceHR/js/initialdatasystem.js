//FUNCION PARA MOSTRAR LOS DATOS DEL USUARIO DE RECURSOS HUMANOS
function loadHRuserdata(){
    hruserid = localStorage.getItem("hruserid");
    axios.get(url+"/hruser/"+hruserid, headers)
    .then(function (res) {
        displayHRuserdata(res.data.message);
    }).catch(function (err) {
        console.log(err);
    })
}

function displayHRuserdata(data) {
    const hruserdata = document.querySelector('.data');
    hruserdata.innerHTML = '';
    for (const property in data[0]) {
        if (data[0].hasOwnProperty(property)) {
          const newspan = document.createElement('span');
          newspan.textContent = `${data[0][property]}`;
          hruserdata.appendChild(newspan);
        }
    }
}

//FUNCION PARA CARGAR LOS DATOS DE TODOS LOS EMPLEADOS
function loadAllEmployees() {
    axios.get(url+"/humanresources", headers)
    .then(function (res) {
        displayAllEmployees(res.data.message);
    }).catch(function (err) {
        console.log(err);
    })
}

function displayAllEmployees(employee) {   
    const table = document.querySelector('#tableEmployees tbody');
    const divactions = document.getElementById('actionsrows');
    table.innerHTML = '';
    divactions.innerHTML = '';

    for (let i = 0; i < employee.length; i++) {
        const newrow = document.createElement('tr');
        newrow.innerHTML = `<td>${employee[i].employee_id}</td>
                        <td>${employee[i].employee_name}</td>
                        <td>${employee[i].employee_lastname}</td>
                        <td>${employee[i].employee_number}</td>
                        <td>${employee[i].employee_mail}</td>
                        <td>${employee[i].employee_address}</td>`;

        newrow.onclick = function() {
            selectRow(this);
        };
        table.appendChild(newrow);
    }
        
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

        showdeletebtn(column1);
        showeditdatabtn(column1,column2,column3,column4,column5,column6);
    }

    function showdeletebtn(id) {
        var btndelete = document.createElement('button');
        btndelete.textContent = 'Eliminar Fila';
        btndelete.id = "deleteemployee";

        btndelete.onclick = function() {
            deleteemployee(id);
        };

        divactions.innerHTML = '';
        divactions.appendChild(btndelete);
    }

    function showeditdatabtn(id,name,lastname,number,mail,address) {
        var btneditdata = document.createElement('button');
        btneditdata.textContent = 'Editar Datos';
        btneditdata.id = "editdata";

        btneditdata.onclick = function() {
            showEditDataDisplay(id,name,lastname,number,mail,address);
        };

        divactions.appendChild(btneditdata);
    }
}