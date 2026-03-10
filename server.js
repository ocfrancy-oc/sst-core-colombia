const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// Esta es la conexión a la base de datos de SST
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sst_db',
    password: 'TU_CONTRASEÑA_AQUÍ',
    port: 5432,
});

app.get('/', (req, res) => {
    res.send('Software SST Colombia - Fondo Emprender Funcionando');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor de SST corriendo en el puerto ' + PORT);
});