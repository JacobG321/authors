import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const AuthorList = (props) => {

    const {authors, setAuthors} = props;
    const authorsSorted = [...authors].sort((a,b) => a.name > b.name ? 1:-1)
    console.log("authors sorted", authorsSorted)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((res)=>{
            setAuthors(res.data.authors);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [authors.length-1])

    const deleteAuthor = (authorID) => {
        axios.delete('http://localhost:8000/api/author/' + authorID)
            .then(() => {
                console.log(authorID)
                setAuthors(authors.filter(author => author._id != authorID))
            })
            .catch(err => console.log(err))
    }

    
    return (
        <div>
            <h1>Favorite Authors</h1>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <td>Authors name</td>
                        <td>View/Edit/Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorsSorted.map((author, index)=>{
                        return  <tr key={index}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={{pathname:`/author/${author._id}`}} >View </Link>
                                    <Link to={"/author/edit/" + author._id}>Edit </Link>
                                    <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <Link to={'/create/'}>Create Author</Link>
        </div>
    )
}

export default AuthorList