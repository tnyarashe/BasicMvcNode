module.exports = rs => {
    const router = require("express").Router()
    const controller = require('../controller/user.controller')

    router.post('/signup', controller.create)//Add user

    router.get('/', controller.getAll)//get all users

    router.delete('/', controller.deleteAll)//Delete all users

    router.put('/:id', controller.update)//update one user

    router.delete('/:id', controller.deleteOne)//delete a user

rs.use('/v1/users', router)    
}