import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import './Login.css';

export function Login() {
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
        axios.post(`${import.meta.env.VITE_API_URL}/Login`, { email, password })
            .then(res => {
                console.log(res);

                if (res.status === 200){
                    alert('Ingreso Correcto');
                    navigate('/Inicio'); //lleva a la pagina de Inicio

                }
            })
            .catch(err => {
                // Muestra el mensaje de error específico si está disponible
                const errorMessage = err.response?.data?.message || 'Email o contraseña incorrectos';
                alert(errorMessage);
                console.log(err);
            });
    }

    return (
        <main className="Login">
            <form className="Login-form" onSubmit={handleSubmit}>
                <h1>INICIAR SESIÓN</h1>
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
                <button type="submit">INGRESAR</button>
                <Link to="/recover-password" className="recover-password-link">¿Olvidaste tu contraseña?</Link>
                <Link to="/Register" className="recover-password-link">REGISTRARSE</Link> {/* Cambiado a Link */}
            </form>
        </main>
    );
}

export default Login;
