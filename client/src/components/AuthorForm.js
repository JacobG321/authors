import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate, Link} from "react-router-dom";


const AuthorForm = (props) => {
    const {authors, setAuthors} = props
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', { 
            name
        })
            .then(res=>{
                console.log(res.data);
                setAuthors([...authors, res.data])
                setName('')
                setErrors([])
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
            <p>Add new author:</p>
            <form onSubmit={onSubmitHandler}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <label htmlFor='name'>name</label>
                    <input type="text" name='name' value={name} onChange = {(e)=>setName(e.target.value)}/>
                    <div>
                        <button type='submit'>Submit</button>
                        <button type='button' onClick={cancelHandler}>Cancel</button>
                    </div>
            </form>
            
        </div>
    )
}
export default AuthorForm;