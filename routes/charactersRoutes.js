const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/character', async (req, res) => {
    const url = "https://rickandmortyapi.com/api/characters"
    try {
        const response = await axios.get(url)
        res.json(response.data)
    } catch (error) {
        res.status(404).json({error: 'personajes no encontrados'})
    }
})

router.get('/:nombre', async (req, res) => {
    const name = req.params.name
    const url = `https://rickandmortyapi.com/api/characters/?name=${name}`
    try {
        const response = await axios.get(url)
        const character = response.data.results[0];
        res.send(`
            <h1>${character.name}</h1>
            <p>Gender: ${character.gender}</p>
            <img src="${character.image}" alt="${character.name}">
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Location: ${character.location.name}</p>
            <p>Origin: ${character.origin.name}</p>
        `)
    } catch (error) {
        res.status(404).json({error: 'personaje no encontrado'})
    }
})

module.exports = router