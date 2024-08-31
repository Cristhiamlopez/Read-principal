import React, { useState } from "react";
import axios from 'axios';
import './login.css';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then(res => {
                alert('Ingreso Correcto');
                console.log(res);
            })
            .catch(err => {
                // Muestra una alerta si hay un error en la solicitud
                alert('Email o contraseña incorrectos');
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
                <a href="/recover-password" className="recover-password-link">¿Olvidaste tu contraseña?</a>
            </form>
        </main>
    );
}

export default Login;
