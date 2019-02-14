import React, { Component } from 'react';
import BookContext from './BookContext'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  render () {
    const { books } = this.props;

    return (
      <ol className="books-grid">

        {books.map((book) => (
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover"
                  style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url("${book.imageLinks.thumbnail}")`
                    }}></div>
                <BookContext />
              </div>
              <div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </div>
          </li>
        ))}

      </ol>
    )
  }
}

export default Book;
