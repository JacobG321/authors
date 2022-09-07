import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";


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
                // console.log("response test", response.name)
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

    return (
        <div>
            <form onSubmit={updateHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <label htmlFor='name'>Author name</label>
                <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input type="submit"/>
            </form>

        </div>
    )
}

export default UpdateAuthor