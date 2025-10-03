const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
    res.send('¡Servidor funcionando con Express y dotenv!');
}); 

app.listen(process.env.PORT, () => {
    console.log("Servidor escuchando en el puerto " + process.env.PORT)
});