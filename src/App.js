import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf'


class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
          <Bookshelf />
      </div>
    )
  }
}

export default BooksApp
