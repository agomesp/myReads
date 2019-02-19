import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book'

class ListBook extends Component {
  state = {
    query: "",
    showingBooks: [],
  }

  updateQuery = (query) => {
    if (query === '') {
      this.setState(() => ({
        showingBooks: [],
        query: ""
      }))
    } else {
      BooksAPI.search(query)
      .then((books) => {
        if (books.error === "empty query") {
          this.setState(() => ({
            showingBooks: [],
            query: query.trim()
          }))
        }else {
          this.setState(()  => ({
              query: query.trim(),
              showingBooks: books
          }));
        }
      })
    }
  }

  render () {

    const { query, showingBooks } = this.state;
    const { onBack, updateShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => onBack()}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) =>
                this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <Book key={book.id} book={book} updateShelf={updateShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListBook;
