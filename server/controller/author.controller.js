const Author = require("../models/author.model")

const AuthorController = {

    // Create
    // bad request for create error
    create:(req,res) =>{
        Author.create(req.body)
        .then((author)=>{
            res.status(201).json({author:author})
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
    },

    // Read, the first item passed through .json is the key in the api
    getAll:(req,res) =>{
        Author.find({})
        .then((author)=>{
            res.status(200).json({authors:author})
        })
        .catch((err)=>{
            res.status(500).json({message:"There has been an error", error:err})
        })
    },
    getOne:(req,res)=>{
        Author.find({_id:req.params.id})
        .then((author)=>{
            // logic here does not work but this is how you do it
            // if(authorExists) {
            //     return Promise.reject("author does not exist")
            // }
            res.status(200).json({author:author})
        })
        .catch((err)=>{
            res.status(500).json({message:"There has been an error",error:err})
        })
    },


    // Update, run validators runs the validations on update
    // new:true indicates that we want the returned document to contain the newly updated document instead of the default mongoose action of sending back the original document (prior to updating).
    update:(req,res)=>{
        Author.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((author)=>{
            res.status(200).json({updatedAuthor:author})
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
    },

    // Delete
    delete:(req,res)=>{
        Author.findOneAndDelete({_id:req.params.id})
        .then((author)=>{
            res.status(200).json({deletedAuthor:author})
        })
        .catch((err)=>{
            res.status(500).json({message:"There has been an error",error:err})
        })
    }


}

module.exports=AuthorController