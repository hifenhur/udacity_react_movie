import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchResponse: [],
    query: null
  }

  fetchBookShelf(){
    BooksAPI.getAll().then((data)=>{
      this.setState({
        books: data
      })
    })
  }

  update(book, shelf){
    BooksAPI.update(book, shelf).then((data)=>{
      this.fetchBookShelf()
    })
  }

  searchBooks(query){
    BooksAPI.search(query).then((data, error)=>{
      
      if(data && !data.error){
        this.setState({searchResponse: data})
      }else{
        this.setState({searchResponse: []})
      }
      
    })
  }

  

  componentDidMount(){
    this.fetchBookShelf()
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={({history})=> (
          <SearchBooks 
            history={history}
            searchBooks={this.searchBooks.bind(this)}
            searchResponse={this.state.searchResponse}
            update={this.update.bind(this)}/>
        )}>
          
        </Route>
        <Route exact path="/" render={({history})=>(
          <ListBooks
            books={this.state.books}
            update={this.update.bind(this)}
          />
        )}>
          
        </Route>
      </div>
    )
  }
}

export default BooksApp
