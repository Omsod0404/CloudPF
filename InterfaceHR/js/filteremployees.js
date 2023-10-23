function filterdata() {
    let name = document.getElementById('namefilter').value;
    axios.get(url+"/humanresources/"+name, headers)
    .then(function (res) {
        displayHRuserdatafiltered(res.data.message, name);
    }).catch(function (err) {
        console.log(err);
    })
}

function displayHRuserdatafiltered(employee, name) {
    const table = document.querySelector('#tableEmployees tbody');
    table.innerHTML = '';
    for (let i = 0; i < employee.length; i++) {
        const newrow = document.createElement('tr');
        newrow.innerHTML = `<td>${employee[i].employee_id}</td>
                        <td>${employee[i].employee_name}</td>
                        <td>${employee[i].employee_lastname}</td>
                        <td>${employee[i].employee_number}</td>
                        <td>${employee[i].employee_mail}</td>
                        <td>${employee[i].employee_address}</td>`;
        table.appendChild(newrow);
    }
    if (name != "") {
        const subtitle = document.querySelector('.subtitle');
        subtitle.innerHTML = '';
        const newsubtitle = document.createElement('span');
        subtitle.innerHTML='<span>Datos filtrados</span>';
    }else{
        const subtitle = document.querySelector('.subtitle');
        subtitle.innerHTML = '';
        const newsubtitle = document.createElement('span');
        subtitle.innerHTML='<span>Todos los datos</span>';
    }
}