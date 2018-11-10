import React from 'react'
import {PropTypes} from 'prop-types'
import * as BooksAPI from '.././BooksAPI'
import BookItem from './BookItem'
import SearchTerms from './SearchTerms'
import {Link} from 'react-router-dom'

class SearchBooks extends React.Component {

  componentDidMount(){
    console.log('Search function starts');
  }

	static propTypes = {
      books: PropTypes.array.isRequired,
	    moveTo: PropTypes.func.isRequired,
	}

	state = {
		results:[],
		query: '',
	}

  updateQuery = (e) => {
    let word = e.target.value.trim().replace(/[0-9&#=+();$~@_%.'":*?<>{}]/g, ''); // avoid spaces and special characters. 
    this.setState(() => {
      return {query: word}
    })
    this.searchBooks(word)
  }


  searchBooks = (word) => {
    const maxResults = 20;
    if (word) {
      BooksAPI.search(word, maxResults).then((books) => {
        if(books.length > 0) {
          this.setState(() => {
            return {results: this.setShelf(books)};
          })
        }
      })
    } else {
      this.clearSearch()
    }
  }


  clearSearch = () => {
    this.setState({
      query: '',
      results: []
    })
  }

  // Set Shelves for books, 
  setShelf = (books) => {
    books.map(book => {
      book.shelf = 'none' // set default shelf as 'None'
      this.props.books.forEach(b => {
        b.id === book.id && (book.shelf = b.shelf)
      }) //Set current books to correspond shelves
      return book
    })
    return books
  }


	render() {
    const query = this.state.query
    const results = this.state.results

		return (

    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input 
           type="text" 
           placeholder="Search by title or author" 
           value={query} 
           onChange={this.updateQuery}/>
        </div>
      </div>
      <div className="search-books-results">
       {query.length === 0 && <SearchTerms />}
       {query.length > 0 && results.length !== 0 && <p>Found {results.length} Books </p>}
       <div className="loader">
       {query.length > 0 && results.length === 0 && <div className="three-quarters-loader">Loading...</div>}
       </div>
       
        <ol className="books-grid">
          {query.length > 0 && results.map((book, index) => (
            <BookItem
            book={book}
            key={index}
            moveTo={(shelf) => {
            this.props.moveTo(book, shelf)}}
            />
          ))}
        </ol>
      </div>
    </div>
		)
	}


}


export default SearchBooks;