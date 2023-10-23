const express = require('express');
const hruser = express.Router();
const db = require('../config/database');
const jwt = require('jsonwebtoken');

hruser.post("/signin", async (req, res, next)=>{
    const {hruser_name, hruser_mail, hruser_password} = req.body;

    if (hruser_name && hruser_mail && hruser_password) {
        let query = `INSERT INTO hrusers (hruser_name, hruser_mail, hruser_password) `;
        query += `VALUES('${hruser_name}', '${hruser_mail}', '${hruser_password}')`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(200).json({code: 201, message: "Usuario registrado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"})
});

hruser.post("/login", async (req, res, next) =>{
    const {hruser_mail, hruser_password} = req.body;
    const query = `SELECT * FROM hrusers WHERE hruser_mail = '${hruser_mail}' AND hruser_password = '${hruser_password}'`;
    const rows = await db.query(query);

    if (hruser_mail && hruser_password) {
        if(rows.length == 1){
            const token = jwt.sign({
                hruser_id: rows[0].hruser_id,
                hruser_mail: rows[0].hruser_mail,             
            }, "debugkey");
            const hruserid = rows[0].hruser_id;
            return res.status(200).json({code:200, message:token, hruserid: hruserid});
        }
        else{
            return res.status(200).json({code: 401, message:"Usuario y/o contraseña incorrectos"})
        }
    }
    return res.status(500).json({code:500, message:"Campos incompletos"});
})

hruser.get("/:id([0-9]{1,3})", async (req, res, next) => {
    const id = req.params.id;
    const data = await db.query("SELECT hruser_name, hruser_mail FROM hrusers WHERE hruser_id = "+id);
    (data != null) 
        ? res.status(200).json({code:200, message: data})
        : res.status(404).json({code:404, message: "Usuario no encontrado"});
})

module.exports = hruser;