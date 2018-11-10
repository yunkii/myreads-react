import React from 'react'

const SearchTerms = () => {

    const searchTerms = [
      'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 
      'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 
      'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 
      'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 
      'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 
      'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 
      'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money',
      'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 
      'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 
      'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 
      'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
    ];

	return (
        <div>
	        <p>Suggest Terms...</p>
	        <ul className="search-terms">
	          {searchTerms.map((n) => (
	              <li key={n}>{n}</li>
	           ))}
	        </ul>
        </div>
	)

}

export default SearchTerms;