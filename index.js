const express = require('express');
const app = express();

// Lista de mensajes
const mensajes = [
  "Hoy es un gran día para aprender algo nuevo.",
  "La práctica hace al maestro.",
  "Cada línea de código te acerca a tu objetivo.",
  "Nunca dejes de mejorar.",
  "Recuerda siempre depurar y probar tu código."
];

// Ruta para la página principal
app.get('/', (req, res) => {
  // Selecciona un mensaje aleatorio
  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  res.send(mensaje);
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
