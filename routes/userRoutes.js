const Authentication = require('./authentication');
const passportService = require('../services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })
module.exports = function(app) {
    app.get(`/api/`, requireAuth, function(req, res) {
        res.send({ hi: 'there' })
    })
    app.post(`/api/signin`, requireSignin, Authentication.signin)
    app.post(`/api/signup`, Authentication.signup)
}