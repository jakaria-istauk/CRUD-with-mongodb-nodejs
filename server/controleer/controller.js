var UserDB = require('../model/model');
const { use } = require('../routes/router');

//create and save new user
exports.create = (req, res) =>{
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty" });
        return;
    }

    //new user
    const user = new UserDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    });

    //save user
    user
        .save(user)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create oparation"
            });
        });

}

//retrive and return all users
exports.find=(req, res)=>{
    UserDB.find()
            .then(users =>{
                res.send(users)
            })
            .catch(err=>{
                res.status(500).send({message:err.message || "Error Occurred while retrivinjg user information"})
            })
}

//upodate a user by user id
exports.update=(req, res)=>{
    if(!req.body){
       return res.status(400).send({ message: "Data to update can not be empty" });
    }

    const id = req.params.id;
    UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data=>{
                if(!data){
                    res.status(400).send({ message: `Can not uodate user with id ${id}. May be user not found!` });
                }
            })
            .catch(err=>{
                res.status(500).send({message:err.message || "Error update user information"})
            })
}

//delete a user by id
exports.delete=(req, res)=>{

}