import React, { useState } from 'react'
import axios from 'axios';

const AuthorForm = (props) => {
    const {authors, setAuthors} = props
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([])

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
        <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <label htmlFor='name'>name</label>
                <input type="text" name='name' value={name} onChange = {(e)=>setName(e.target.value)}/>

                <input type="submit"/>
        </form>
    )
}
export default AuthorForm;