import React, { useState } from "react";

const Login = () => {
  // Definir los estados para el nombre de usuario y la contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Generar una función aleatoria
  function generateRandomFunction() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
      case 1:
        return () => {
          if (username === "user1" && password === "123") {
            setIsLoggedIn(true);
          }
          console.log("Function 4");
        };
      case 2:
        return () => console.log("Function 5");
      case 3:
        return () => console.log("Function 6");
      default:
        return () => console.log("Default Function");
    }
  }

  // Establecer la función aleatoria como el manejador de eventos del botón de inicio de sesión
  const handleLogin = generateRandomFunction();

  return (
    <div>
      <h1>ALGO</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {isLoggedIn && (
        <div className="popup">
          <p>Ingreso EXITOSO</p>
        </div>
      )}
    </div>
  );
};

export default Login;

