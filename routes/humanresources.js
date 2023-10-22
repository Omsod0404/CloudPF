const express = require('express');
const humanresources = express.Router();
const db = require('../config/database');

humanresources.post("/", async (req, res, next) =>{
    const {employee_name, employee_lastname, employee_number, employee_mail, employee_address} = req.body;

    if (employee_name && employee_lastname && employee_number && employee_mail && employee_address) {
        let query = "INSERT INTO employees (employee_name, employee_lastname, employee_number,"; 
        query+= "employee_mail, employee_address)";
        query+= `VALUES('${employee_name}', '${employee_lastname}', '${employee_number}',`
        query+= `'${employee_mail}', '${employee_address}')`;

        const rows = await db.query(query);
        if (rows.affectedRows == 1) {
            return res.status(201).json({code:201, message: "Empleado insertado correctamente"});
        }  

        return res.status(500).json({code:500, message:"Ocurrio un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"})
});

humanresources.delete("/:id([0-9]{1,3})", async (req, res, next)=>{
    const query = `DELETE FROM employees WHERE employee_id=${req.params.id}`;
    const rows = await db.query(query);

    if(rows.affectedRows == 1){
        return res.status(200).json({code: 200, message: "Empleado borrado correctamente"});
    }
    return res.status(404).json({code: 404, message: "Empleado no encontrado"});
});

humanresources.put("/:id([0-9]{1,3})", async (req, res, next)=>{
    const {employee_name, employee_lastname, employee_number, employee_mail, employee_address} = req.body;
    
    if (employee_name && employee_lastname && employee_number && employee_mail && employee_address) {
        let query = `UPDATE employees SET employee_name='${employee_name}', employee_lastname='${employee_lastname}',`;
        query+= `employee_number='${employee_number}', employee_mail='${employee_mail}', employee_address='${employee_address}'`;
        query+= `WHERE employee_id=${req.params.id}`;

        const rows = await db.query(query);
        if (rows.affectedRows == 1) {
            return res.status(200).json({code:200, message: "Datos actualizados correctamente"});
        }  

        return res.status(500).json({code:500, message:"Ocurrio un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"})
});

humanresources.patch("/:id([0-9]{1,3})", async (req, res, next)=>{   
    const datosActualizados = req.body;

    if (req.params.id) {
        let query = `UPDATE employees SET ? WHERE employee_id=${req.params.id}`;
        const rows = await db.query(query, datosActualizados);
        if (rows.affectedRows >= 1) {
            return res.status(200).json({code:200, message: "Datos actualizados correctamente"});
        } 
        return res.status(500).json({code: 500, message: "Ocurrio un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompleto"}); 
});

//Obtener todo
humanresources.get("/", async (req, res, next) => {
    const data = await db.query("SELECT * FROM employees")
    return res.status(200).json({code:200, message: data});
})

//Busqueda por nombre
humanresources.get('/:name([A-Za-z]+)', async (req, res, next) =>{
    const name = req.params.name;
    const data = await db.query("SELECT * FROM employees WHERE UPPER(employee_name) = UPPER('"+name+"')");
    (data != null) 
        ? res.status(200).json({code:200, message: data})
        : res.status(404).json({code:404, message: "Empleado no encontrado"});
})

module.exports = humanresources;