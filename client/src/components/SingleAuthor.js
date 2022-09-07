import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";


const SingleAuthor = (props) => {

    const [author, setAuthor] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then( res => {
                const response = res.data.author[0]
                console.log(res.data.author[0])
                setAuthor(response)
            })
            .catch( err => console.log(err))
    }, [])

    const deleteAuthor = (authorID) => {
        axios.delete('http://localhost:8000/api/author/' + authorID)
            .then(()=> navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1><Link to={`/`}>Home</Link></h1>
            <p>Author name: {author.name}</p>
            <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
        </div>
    )
}

export default SingleAuthor