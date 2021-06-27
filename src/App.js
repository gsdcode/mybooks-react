import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './components/BooksList'
import SearchBook from './components/SearchBooks'
class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
		this.fetchBooks()
	}



      fetchBooks() {
          BooksAPI.getAll().then((books) => {
              this.setState({books});
          });
  	}

    changeBookShelf = (book, shelf) => {
    		BooksAPI.update(book, shelf).then(updateBooks => {
    			this.fetchBooks();
    		})

    	}

      screenToggle(v) {
        this.setState({showSearchPage: v});
      }

  render() {
    console.log(this.state);
    let cval = this.state.showSearchPage?false : true
    return (
      <div className="app">
      {this.state.showSearchPage ? (
          <SearchBook changeBookShelf={this.changeBookShelf} books={this.state.books} /> ) :
          <BooksList books={this.state.books} changeBookShelf={this.changeBookShelf} />
      }
      <div className="bottom-bar">
        <div className="bottom-bar-text" onClick={() => this.screenToggle(cval) }>
                    {this.state.showSearchPage?'Show Books' : 'Show Search'}
        </div>
      </div>
      </div>


    )
  }
}

export default BooksApp
