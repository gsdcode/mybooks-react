import React, { Component } from 'react'
import Bookshelf from './BookShelf'
class BooksList extends Component {

		render() {
				return (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            <Bookshelf title='Currently Reading' shelfId='currentlyReading'
							books={this.props.books.filter(book => book.shelf === 'currentlyReading')}
							changeBookShelf={ this.props.changeBookShelf } />
							<Bookshelf title='Want to Read' shelfId='wantToRead'
							books={this.props.books.filter(book => book.shelf === 'wantToRead')}
							changeBookShelf={ this.props.changeBookShelf } />
							<Bookshelf title='Read' shelfId='read'
							books={this.props.books.filter(book => book.shelf === 'read')}
							changeBookShelf={ this.props.changeBookShelf } />

            </div>
          </div>
          <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
          </div>
        </div>

				)
		}
}

export default BooksList
