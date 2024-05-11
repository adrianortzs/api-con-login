const authMiddleware = (req, res, next) => {
    const token = req.session.token
    if (!token) {
        return res.redirect('/')
    }
    next()
}

module.exports = authMiddleware