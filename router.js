const Authentication = require('./controllers/authentication')
const configs = require('./config')



module.exports = function (app) {
    app.get('/signup', Authentication.signup)
    app.get(/signup_success/, Authentication.signupSuccess)
    //TODO in auth controller handle this route to set a jwt for this user as per tutorial
    app.get('/account/', Authentication.isAuthenticated, function (req, res) {
        res.send('logged in')
    })
    // app.get('/github', Authentication.isAuthenticated, function(req, res){
    //     res.send('github app')
    // })


    //TODO create signout route
    // app.get('/signout', Authentication.signOut)
    app.get('*', function(req, res){
        res.status(404).send('Sorry not sure what happened there')
    })
}

