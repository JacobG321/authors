import React from 'react'
import {Link} from 'react-router-dom';


const CatchAll = () => {
  return (
    <div>
        <h1>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</h1>
        <Link to={'/create/'}>Create Author</Link>
    </div>
  )
}

export default CatchAll