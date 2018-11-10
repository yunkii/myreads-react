import React from 'react'
import {Link} from 'react-router-dom'

const SearchBtn = () => {
	return (
        <div className="open-search">
          <Link to="/search">Find a book</Link>
        </div>
	)
}

export default SearchBtn;