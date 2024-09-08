import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Register.css';


export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
    
        // Validación básica
        if (!email || !password) {
            alert('Por favor, complete todos los campos.');
            return;
        }
    
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }
    
        axios.post('http://localhost:8081/Register', { email, password })
            .then(res => {
                console.log(res);
    
                if (res.status === 200) {
                    alert('Usuario creado con éxito');
                    navigate('/Login'); // Lleva a la página de Login
                }
            })
            .catch(err => {
                // Muestra el mensaje de error específico
                const errorMessage = err.response?.data?.message || 'Error desconocido';
                alert(errorMessage);
                console.log(err);
            });
    }
    
//Formulario
    return (
        <main className="Register">
            <form className="Register-form" onSubmit={handleSubmit}>
                <h1>REGISTRE SU USUARIO</h1>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingrese su email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Ocultar" : "Mostrar"}
                        </button>
                    </div>
                </div>
                <button type="submit">CREAR</button>
            </form>
        </main>
    );
}

export default Register;


