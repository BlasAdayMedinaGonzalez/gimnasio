const express = require('express');
const cors = require('cors');
const {query} = require('../config/db');

const app = express();
app.disable(`x-powered-by`);


app.use(express.json());
// res.header( "Access-Control-Allow-Origin" );

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

app.get('/api/v1/users/:username', async (req, res) => {
    const {username} = req.params;
    if (!username) {
        return res.status(400).send({
            error: true,
            message: "username is required"
        });
    }

    try {
        const set = `SELECT username FROM usuarios WHERE username = ?`;
        const results = await query(set, [username]);
        let message = "";

        if (results === undefined || results.length === 0) {
            message = "User is not found";
        } else {
            message = "Sucessfully retrieved user data";
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

app.get('/api/v1/password/:password', async (req, res) => {
    const {password} = req.params;
    if (!password) {
        return res.status(400).send({
            error: true,
            message: "password is required"
        });
    }

    try {
        const set = `SELECT * FROM usuarios WHERE passwords = ?`;
        const results = await query(set, [password]);
        let message = "";

        if (results === undefined || results.length === 0) {
            message = "Password is not found";
        } else {
            message = "Sucessfully retrieved password data";
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

app.post("/api/v1/user", async (req, res) => {
    const {username, email, passwords} = req.body;
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    if (!username || !passwords) {
        return res.status(400).send({
            error: true,
            message: "Provide user data"
        });

    }

    try {
        const sql = "INSERT INTO Usuarios (username, email, passwords) VALUES (?,?,?)";
        const results = await query(sql, [username, email, passwords])

        res.send({
            error: false,
            data: {insertId: results.insertId},
            message: "User Sucessfully added"
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})


app.get('/api/v1/ejercicios', async (req, res) => {
    try {
        const set = `SELECT * FROM ejercicios`;
        const results = await query(set);
        let message = "";
        if (results === undefined || results.length === 0) {
            message = "ejercicios table is empty";
        } else {
            message = "Successfully retrieved all ejercicios";
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

app.get('/api/v1/entrenamientos', async (req, res) => {
    console.log(res);
    try {
        const set = `SELECT * FROM entrenamientos`;
        const results = await query(set);
        let message = "";
        if (results === undefined || results.length === 0) {
            message = "entrenamientos table is empty";
        } else {
            message = "Successfully retrieved all entrenamientos";
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

module.exports = {
    runServer, stopServer
};