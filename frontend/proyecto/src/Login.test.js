import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Login from './Login';

// Creamos una instancia de MockAdapter para simular las solicitudes de axios
const mockAxios = new MockAdapter(axios);

describe('Login Component', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('debe mostrar un mensaje de error si los campos están vacíos', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/INGRESAR/i));

    expect(window.alert).toHaveBeenCalledWith('Por favor, complete todos los campos.');
  });

  test('debe mostrar un mensaje de error si el correo no es válido', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Ingrese su email/i), {
      target: { value: 'correo-no-valido' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Ingrese su contraseña/i), {
      target: { value: '123456' },
    });

    fireEvent.click(screen.getByText(/INGRESAR/i));

    expect(window.alert).toHaveBeenCalledWith('Por favor, ingrese un correo electrónico válido.');
  });

  test('debe mostrar "Ingreso Correcto" y redirigir al usuario si el login es exitoso', async () => {
    mockAxios.onPost('http://localhost:8081/login').reply(200);

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Ingrese su email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Ingrese su contraseña/i), {
      target: { value: '123456' },
    });

    fireEvent.click(screen.getByText(/INGRESAR/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Ingreso Correcto');
    });
  });

  test('debe mostrar un mensaje de error si el login falla', async () => {
    mockAxios.onPost('http://localhost:8081/login').reply(401, {
      message: 'Email o contraseña incorrectos',
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Ingrese su email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Ingrese su contraseña/i), {
      target: { value: 'wrongpassword' },
    });

    fireEvent.click(screen.getByText(/INGRESAR/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Email o contraseña incorrectos');
    });
  });
});
