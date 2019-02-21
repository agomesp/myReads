import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book'

class ListBook extends Component {
  state = {
    showingBooks: [],
    typing: false,
    typingTimeout: 0
  }

  updateQuery = (query) => {
    if (query === '') {
      this.setState(() => ({
        showingBooks: [],
      }))
    } else {
      BooksAPI.search(query)
      .then((books) => {
        if (books.error === "empty query") {
          this.setState(() => ({
            showingBooks: [],
          }))
        }else {
          this.setState(()  => ({
              showingBooks: books
          }));
        }
      })
    }
  }

  handleUpdateQuery = (event) => {
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    this.setState({
      typing: false,
      typingTimeout: setTimeout(this.updateQuery(event.target.value), 5000)
    })
  }

  render () {
    const { query, showingBooks } = this.state;
    const { onBack, updateShelf, oldBooks } = this.props;
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
              onChange={this.handleUpdateQuery}

            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {showingBooks.map((book) => (
              <Book key={book.id} book={book} updateShelf={updateShelf} oldBooks={oldBooks} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListBook;
