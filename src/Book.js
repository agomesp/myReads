import React, { Component } from 'react';
import BookContext from './BookContext'

class Book extends Component {
  render () {
    const { book, updateShelf } = this.props;

    return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${book.imageLinks.thumbnail}")`
                  }}></div>
              <BookContext
                shelfSelected= {book.shelf}
                book= {book}
                updateShelf={updateShelf}
              />
            </div>
            <div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </div>
        </li>
    )
  }
}

export default Book;
