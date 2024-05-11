const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    const token = req.session.token
    if (token) {
        res.redirect('/search')
    } else {
        const formularioLogin = `<h1>Iniciar sesión</h1>
        <form action="/login" method="post">
        <input type="text" name="username" id="username" placeholder="Usuario" required><br>
        <input type="password" name="password" id="password" placeholder="Contraseña" required><br>
        <button type="submit">Iniciar sesión</button>
        </form>`
        res.send(formularioLogin)
    }
})

router.post('/login', (req, res) => {
    
})

router.post("/logout", (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

module.exports = router