import React from 'react'
import {PropTypes} from 'prop-types'

class BookItem extends React.Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    moveTo: PropTypes.func.isRequired, 
  }

  changeShelf = (e) => {
    this.props.moveTo(e.target.value)
  }


render() {
    const book = this.props.book
    const imageLink = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'https://i.imgur.com/9HDH51T.png';
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{backgroundImage: `url("${imageLink}")`}}></div>
            <div className="book-shelf-changer">
              <select onChange={this.changeShelf} defaultValue={book.shelf}>
                <option value="" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title ? book.title : 'Unknown'}</div>
          <div className="book-authors">{book.authors ? book.authors.join(' & ') : 'Unknown'}</div>
        </div>
      </li>
	)
}

}

export default BookItem;