// 1 - Importamos módulos con require
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// 2 - Configuración
const app = express();
app.use(express.json());
app.use(cors());

// 3 - Conexión a la base de datos
const conexion = mysql.createConnection({
    host: "localhost",
    database: "personas",
    user: "root",
    password: ""
});

// 4 - Rutas
app.post('/login', (req, res) => {
    const query = "SELECT * FROM administrador WHERE email = ? AND contraseña = ?";
    conexion.query(query, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.status(500).json({ message: "Error en el servidor." });

        if (data.length > 0) {
            return res.status(200).json({ message: "Ingreso Correcto" });
        } else {
            return res.status(401).json({ message: "Email o contraseña incorrectos." });
        }
    });
});

// 5 - Poner a escuchar al servidor
app.listen(8081, () => {
    console.log("Servidor escuchando en el puerto 8081...");
});
