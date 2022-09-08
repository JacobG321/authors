import React, { useState } from 'react'
import AuthorList from '../AuthorList'

const Main = (props) => {

    const [authors, setAuthors] = useState([])

    return (
        <div>
            <AuthorList authors={authors} setAuthors={setAuthors}/>
        </div>
    )
}

export default Main