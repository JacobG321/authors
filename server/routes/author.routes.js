const AuthorController = require("../controller/author.controller")

const routes = (app) => {

    app.post('/api/author', AuthorController.create)
    
    // get all
    app.get('/api/authors', AuthorController.getAll)

    // get one
    app.get('/api/author/:id', AuthorController.getOne)

    //Update
    app.put('/api/author/:id', AuthorController.update)

    //Destroy
    app.delete('/api/author/:id',AuthorController.delete)

}


module.exports = routes