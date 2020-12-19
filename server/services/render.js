const axios = require('axios');

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', {users: response.data});
        })
        .catch(err=>{
            res.send(err)
        })
        // res.render('index', {users: res.data});
}

exports.addUser = (req, res) => {
    res.render('add_user');
}

exports.updateUser = (req, res) => {
    res.render('update_user');
}