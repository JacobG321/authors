import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams, Link} from "react-router-dom";
import styles from "../static/AuthorForm.module.css"



const UpdateAuthor = (props) => {

    const {id} = useParams()
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                const response = res.data.author[0]
                console.log(res.data.author[0])
                setName(response.name)
            })
            .catch(err => console.log(err))
    }, [])

    const updateHandler = (e) => {
    e.preventDefault()
        axios.put('http://localhost:8000/api/author/' + id, {
            name
        })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors
                const errorArray = []
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message)
                }
                setErrors(errorArray)
            })
    }
    const cancelHandler = (e) => {
        navigate('/')
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/`}>Home</Link>
            <p>Edit this author</p>

            <div className={styles.centerForm}>
                <form onSubmit={updateHandler}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <label htmlFor='name'>Author name</label>
                    <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <div>
                        <button type='submit'>Submit</button>
                        <button type='button' onClick={cancelHandler}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateAuthor