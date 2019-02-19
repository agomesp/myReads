import React, { Component } from 'react';
import BookContext from './BookContext'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  render () {
    const { bookName, bookAuthors, bookCover, shelfSelected, updateShelf } = this.props;

    const  book  = this.props.book;
    console.log(book.title);
    console.log(updateShelf);

    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${book.imageLinks.thumbnail}")`
                  }}></div>
              <BookContext
                shelfSelected= {shelfSelected}
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
