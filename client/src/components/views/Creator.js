import React, { useState } from 'react'
import AuthorForm from '../AuthorForm'

const Creator = (props) => {

    const [authors, setAuthors] = useState([])

    return (
        <div>
            <AuthorForm authors={authors} setAuthors={setAuthors}/>
        </div>
    )
}

export default Creator