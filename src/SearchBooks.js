import React from 'react'
import Book from './Book'

export default function SearchBooks(props){
    return(
        <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => props.history.push("/") }>Close</a>
              <div className="search-books-input-wrapper">
                <input onChange={(e)=> props.searchBooks(e.target.value)} type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {props.searchResponse.map((book)=>{
                  return(<li key={book.id}><Book  update={props.update.bind(this)} book={book}/></li>)
                })}
              </ol>
            </div>
          </div>
    );
}