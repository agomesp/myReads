import React, { Component } from 'react';
import BookCover from './BookCover'
import BookContext from './BookContext'
import BookName from './BookName'

class Book extends Component {
  render () {
    return (
      <div className="book">
        <div className="book-top">
          <BookCover />
          <BookContext />
        </div>
        <BookName />
      </div>
    )
  }
}

export default Book;
