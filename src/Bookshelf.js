import React, { Component } from 'react';
import Book from './Book'
import ListBook from './ListBook'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'

class Bookshelf extends Component {
  state = {
    books: [],
    shelfs: [
      {
        id: "currentlyReading",
        title:"Reading"
      },
      {
        id: "wantToRead",
        title: "Want to Read"
      },
      {
        id: "read",
        title: "Read"
      }
    ]
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
    const { books, shelfs } = this.state;

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
                {shelfs.map((shelf) => (
                  <div key={shelf.id} className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.title}</h2>
                    <ol className="books-grid">
                      {books.map((book) => (
                        (book.shelf === shelf.id) ?
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
                ))}
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
