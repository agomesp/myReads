import React, { Component } from 'react';
import Book from './Book'

class Bookshelf extends Component {
  render () {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <Book />
          </li>
          <li>
            <Book />
          </li>
        </ol>
      </div>
    )
  }
}

export default Bookshelf;
