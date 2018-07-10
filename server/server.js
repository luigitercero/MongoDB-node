const express = require('express')
const app = express()

app.get('/usuario', function (req, res) {
    res.json('getUsuario');
})

app.post('/usuario', function (req, res) {
    res.json('post Usuario');
})
app.put('/usuario', function (req, res) {
    res.json('put Usuario');
})
app.delete('/usuario', function (req, res) {
    res.json('delet Usuario');
})


app.get('/', function (req, res) {
    res.json('Hello World')
})

app.listen(3000, () => {
    console.log("escuchando puerto 300");
})