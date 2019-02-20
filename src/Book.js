import React, { Component } from 'react';
import BookContext from './BookContext'

class Book extends Component {
  render () {

    const { book, updateShelf, oldBooks } = this.props;

    let bookShelf = book.shelf;
    let hasBook = false;
    let bookCover = "";

    if(!book.imageLinks){
      bookCover = "http://lgimages.s3.amazonaws.com/nc-md.gif"
    } else {
      bookCover = book.imageLinks.thumbnail
    }

    if (oldBooks) {
      {oldBooks.map((oldBook) => {
           if (oldBook.id == book.id) {
              bookShelf = oldBook.shelf;
              hasBook = true;
            } else if (!hasBook) {
              bookShelf = "none";
            };
      })}
    }



    return (

        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${bookCover}")`
                  }}></div>
              <BookContext
                shelfSelected= {bookShelf}
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
