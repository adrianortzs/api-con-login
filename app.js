const express = require('express')
const session = require('express-session')
const charactersRoutes = require('./routes/charactersRoutes')
const searchRoutes = require('./routes/searchRoutes')
const indexRoutes = require('./routes/index')
const authMiddleware = require('./middlewares/authMiddleware')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(session({
    secret: 'tu_secreto',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))
app.use('/', indexRoutes)
app.use('/character',authMiddleware, charactersRoutes)

const port = 3000

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
})