// 1 - Importamos módulos con require
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt"); // Importar bcrypt
const dotenv = require("dotenv")


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// 3 - Conexión a la base de datos
const conexion = mysql.createConnection({
    /*host: "localhost",
    database: "personas",
    user: "root",
    password: ""*/
    host: process.env.MYSQL_ADDON_HOST,
    database : process.env.MYSQL_ADDON_DB,
    user: process.env.MYSQL_ADDON_USER,
    port: process.env.MYSQL_ADDON_PORT,
    password: process.env.MYSQL_ADDON_PASSWORD
    

});

// 4 - Rutas
// Ruta de inicio de sesión
app.post('/login', (req, res) => {
    const query = "SELECT * FROM administrador WHERE email = ?";
    conexion.query(query, [req.body.email], async (err, data) => {
        if (err) return res.status(500).json({ message: "Error en el servidor." });

        if (data.length > 0) {
            const user = data[0];
            // Verificar la contraseña ingresada con la contraseña encriptada
            const match = await bcrypt.compare(req.body.password, user.contraseña);
            if (match) {
                return res.status(200).json({ message: "Ingreso Correcto" });
            } else {
                return res.status(401).json({ message: "Email o contraseña incorrectos." });
            }
        } else {
            return res.status(401).json({ message: "Email o contraseña incorrectos." })
        }
    });
});

// Ruta de registro
app.post('/Register', async (req, res) => {
    const { email, password } = req.body;

    const dbcheck = "SELECT * FROM administrador WHERE email = ?";
    conexion.query(dbcheck, [email], async (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Error en el servidor al verificar el correo." });
        }

        if (data.length > 0) {
            return res.status(400).json({ success: false, message: "El correo ya se encuentra registrado" });
        } else {
            // Encriptar la contraseña antes de guardarla
            const hashedPassword = await bcrypt.hash(password, 10);
            const dbinsert = "INSERT INTO administrador (email, contraseña) VALUES (?, ?)";
            conexion.query(dbinsert, [email, hashedPassword], (err, data) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ success: false, message: "Error en el servidor al crear el usuario." });
                }
                return res.status(200).json({ success: true, message: "Usuario creado con éxito" });
            });
        }
    });
});

// 5 - Poner a escuchar al servidor
app.listen(8081, () => {
    console.log("Servidor escuchando en el puerto 8081...");
});
