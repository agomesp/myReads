import React, { Component } from 'react';
import Book from './Book'
import ListBook from './ListBook'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }


  render () {
        console.log(this.state.books);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Bookshelf</h1>
          <hr/>
        </div>
        <div className="list-books-content">
          <div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Book books={this.state.books} />
                  </li>
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to read</h2>
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
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
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
            </div>
          </div>
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>



    )
  }
}

export default Bookshelf;
