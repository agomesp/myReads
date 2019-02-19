import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class BookContext extends Component {
  render () {
    const { shelfSelected, book, updateShelf } = this.props

    const handleUpdate = (element) => {
      BooksAPI.update(book, element.value);
      updateShelf();
    };

    return (
      <div className="book-shelf-changer">
        <select id={book.id}
          onChange={() => {handleUpdate(document.getElementById(book.id))}}
          value={shelfSelected}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookContext;
