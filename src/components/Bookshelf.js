import React from 'react'
import {PropTypes} from 'prop-types'
import BookItem from './BookItem'


class Bookshelf extends React.Component {

  componentDidMount(){
    console.log('Bookshelf loaded');
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    moveTo: PropTypes.func.isRequired,
  }

	render() {
    const books = this.props.books
		return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="loader">
          {this.props.books.length === 0 && <div className="heartbeat-loader">Loading...</div>}
          </div>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                  <BookItem 
                    book={book} 
                    key={book.id} 
                    moveTo={(shelf) => {this.props.moveTo(book, shelf)}}
                  />
                ))}
            </ol>
          </div>
        </div>
      </div>
		)
	}
}


export default Bookshelf;