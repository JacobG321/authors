import React, { useState } from 'react'
import AuthorForm from '../AuthorForm'
import AuthorList from '../AuthorList'

const Main = (props) => {

    const [authors, setAuthors] = useState([])

    return (
        <div>
            <AuthorForm authors={authors} setAuthors={setAuthors}/>
            <AuthorList authors={authors} setAuthors={setAuthors}/>
        </div>
    )
}

export default Main