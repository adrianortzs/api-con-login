const express = require('express')

const router = express.Router()

router.get('/search', (req, res) => {
    const busqueda = `<h1>Búsqueda de personajes</h1>
    <form action="/character" method="get">
    <input type="text" id="nombre" placeholder="Buscar por nombre" required><br>
    <button type="submit">Buscar</button>
    </form>
    <form action="/logout" method="post">
    <button type="submit">Cerrar sesión</button>
    </form>`
    res.send(busqueda)
})

module.exports = router