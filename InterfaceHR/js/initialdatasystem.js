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
}