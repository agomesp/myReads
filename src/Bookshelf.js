import React, { Component } from 'react';
import Book from './Book'
import ListBook from './ListBook'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'

class Bookshelf extends Component {
  state = {
    books: [],
  }

  getAllBooks = () => (BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    }))

  componentDidMount() {
    this.getAllBooks()
  }

  updateShelf = () => (
    this.getAllBooks()
  )


  render () {
    const { books } = this.state;

    return (
      <div>
        <Route path='/search' render={({ history }) =>
          <ListBook
            onBack={() => {history.push('/'); this.updateShelf();}}
            updateShelf={this.updateShelf}
            oldBooks={books}
          />
        }/>

        <Route exact path='/' render={() => (
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
                  <ol className="books-grid">
                    {books.map((book) => (
                      (book.shelf === "currentlyReading") ?
                        <div key={book.id} className="bookshelf-books">
                            <Book
                              book={book}
                              updateShelf={this.updateShelf}
                            />
                        </div>
                        : false
                      ))}
                  </ol>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                          (book.shelf === "wantToRead") ?
                            <div key={book.id} className="bookshelf-books">
                                <Book
                                  book={book}
                                  updateShelf={this.updateShelf}
                                />
                            </div>
                            : false
                          ))}
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map((book) => (
                        (book.shelf === "read") ?
                          <div key={book.id} className="bookshelf-books">
                              <Book
                                book={book}
                                updateShelf={this.updateShelf}
                              />
                          </div>
                          : false
                        ))}
                    </ol>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )}/>

      </div>


    )
  }
}

export default Bookshelf;
