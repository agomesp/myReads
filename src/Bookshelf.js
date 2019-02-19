import React, { Component } from 'react';
import Book from './Book'
import ListBook from './ListBook'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {
  state = {
    books: [],
    shelfs: ["Reading", "Want to Read", "Read"]
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
    console.log(this.state);
    console.log(this.updateShelf);
    const { books } = this.state;

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
              <ol className="books-grid">
                {books.map((book) => (
                  (book.shelf === "currentlyReading") ?
                    <div className="bookshelf-books">
                        <Book
                          book={book}
                          shelfSelected={book.shelf}
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
                        <div className="bookshelf-books">
                            <Book
                              book={book}
                              shelfSelected={book.shelf}
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
                      <div className="bookshelf-books">
                          <Book
                            book={book}
                            shelfSelected={book.shelf}
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
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>



    )
  }
}

export default Bookshelf;
