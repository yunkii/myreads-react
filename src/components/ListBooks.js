import React from 'react'
import {PropTypes} from 'prop-types'
import Bookshelf from './Bookshelf'
import SearchBtn from './SearchBtn'

class ListBooks extends React.Component {

static propTypes = {
    books: PropTypes.array.isRequired,
    moveTo: PropTypes.func.isRequired
}

render() {

const shelves = [
  {id: 'currentlyReading', title: 'Currently Reading'},
  {id: 'wantToRead', title: 'Want to Read'},
  {id: 'read', title: 'Read'},
];

return (
		<div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
          <p>An Udacity FEND project using React</p>
        </div>
        <div className="list-books-content">
          {shelves.map((n) => (
              <Bookshelf key={n.id}
                title={n.title}
                moveTo={this.props.moveTo} 
                books={this.props.books.filter((book) => (book.shelf === n.id))}
              />
           ))}
        </div>
        <SearchBtn />
      </div>
    </div>
	)
}



}


export default ListBooks;