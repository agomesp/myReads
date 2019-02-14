import React, { Component } from 'react';
import Bookshelf from './Bookshelf'

class BookshelfName extends Component {
  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Reading</h2>
        <Bookshelf />

      </div>
    )
  }
}

export default BookshelfName;
