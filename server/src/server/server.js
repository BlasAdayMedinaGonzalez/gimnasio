const express = require('express');
const cors = require('cors');
const {query} = require('../config/db');

const app = express();
app.disable(`x-powered-by`);


app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(cors());

let server;
const runServer = () => {
    server = app.listen(8000, () => {
        console.log('Server started...')
    })
};


const stopServer = () => {
    console.log('Closing out remining connection.')
    server.close();
};

// Verbos HTTP
// Method         URL               Action
//   GET          /api/             Show message about API.
//   GET          /api/employees       Retrieve all employees.
//   GET          /api/employee/:id    Retrieve employee where employee_id=??
//   POST         /api/employees       Add new employee.
//   PUT          /api/employee/:id    Update employee where employee_id=??
//   DELETE       /api/employee/:id    Delete employee where employee_id=??

// Rutas de nuestra API.
app.get('/api/v1', (req, res) => {
    return res.send({
        error: false,
        message: "Welcome to RESTFul CRUD API in Node.js with Express",
        written_by: "Acceso a Datos",
        published_on: "http://localhost:8000/api/v1/"
    });
})

app.get('/api/v1/ejercicios', async (req, res) => {
    try {
        const set = `SELECT * FROM ejercicios`;
        const results = await query(set);
        let message = "";
        if (results === undefined || results.length === 0) {
            message = "employeees table is empty";
        } else {
            message = "Successfully retrieved all employees";
        }

        res.send({
            error: false,
            data: results,
            message: message
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.get('/api/v1/employee/:id', async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).send({
            error: true,
            message: "employee id is required"
        });
    }

    try {
        const set = `SELECT * FROM employees WHERE employee_id = ?`;
        const results = await query(set, [id])
        let message = "";

        if (results === undefined || results.length === 0) {
            message = "employee is not found";
        } else {
            message = "Sucessfully retrieved employee data";
        }

        res.send({
            error: false,
            data: results,
            message: message
        })

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.post("/api/v1/employee", async (req, res) => {
    const {first_name, last_name, hora_entrada, hora_salida, departamento, formacion, contacto, salario,entrada,tarea,salida,comentarioEmployee,comentario, rendimiento} = req.body;

    if (!first_name || !last_name) {
        return res.status(400).send({
            error: true,
            message: "Provide employee name and last name"
        });

    }

    try {
        const sql = "INSERT INTO employees (first_name, last_name, hora_entrada, hora_salida, departamento, formacion, contacto, salario,tarea,entrada,salida,comentarioEmployee,comentario, rendimiento) VALUES (?, ?, ?, ?, ?, ?, ?,?, ?,?,?,?,?,?)";
        const results = await query(sql, [first_name, last_name, hora_entrada, hora_salida, departamento, formacion, contacto, salario,tarea,entrada,salida,comentarioEmployee,comentario, rendimiento])

        res.send({
            error: false,
            data: {insertId: results.insertId},
            message: "employee Sucessfully added"
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})


app.put("/api/v1/employee/:id", async (req,res) => {
    const {first_name, last_name, hora_entrada, hora_salida, departamento, formacion, contacto, salario,entrada,tarea,salida,comentarioEmployee,comentario, rendimiento} = req.body;
    const {id} = req.params;

    if (!id || !first_name || !last_name) {
        return res.status(400).send({
            error: true,
            message: "Provide employee id, first_name and last_name"
        });
    }

    try {
        const sql = "UPDATE employees SET first_name = ?, last_name = ?, hora_entrada = ?, hora_salida = ?, departamento = ?, formacion = ?, contacto = ?, salario = ?,entrada = ?, tarea = ?,salida = ?,comentarioEmployee= ?,comentario = ?, rendimiento= ? WHERE employee_id = ?";
        const results = await query(sql, [first_name, last_name, hora_entrada, hora_salida, departamento, formacion, contacto, salario,entrada,tarea,salida,comentarioEmployee,comentario, rendimiento, id]);
        let message = "";
        if (results.changedRows === 0) {
            message = "employee not found or data are same"
        } else {
            message = "employee succesfully added"
        }

        res.send({
            error: false,
            data: {changedRows: results.changedRows},
            message: message
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.delete('/api/v1/employee/:id', async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).send({
            error: true,
            message: "employee id is required"
        });
    }

    try {
        const set = `DELETE FROM employees WHERE employee_id = ?`;
        const results = await query(set, [id])
        let message = "";

        if (results.affectedRows === 0) {
            message = "employee is not found";
        } else {
            message = "Sucessfully retrieved delete";
        }

        res.send({
            error: false,
            data: {affectedRows: results.affectedRows},
            message: message
        })

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = {
    runServer, stopServer
};