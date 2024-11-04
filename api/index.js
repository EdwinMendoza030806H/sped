const express = require('express');
const cors = require('cors');
const path = require('path'); 

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../'))); // Esto sirve archivos estáticos desde la raíz del proyecto

// Datos de los planes de internet


// Ruta principal de la API
app.get('/', (req, res) => {
  res.send('Welcome to SpeedCom API');
});




app.listen(port, '0.0.0.0', () => {
  console.log(`SpeedCom API is running on http://18.221.18.137:${port}`);
});

