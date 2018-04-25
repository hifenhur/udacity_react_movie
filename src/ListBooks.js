import React from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'
export default function ListBooks(props){
    return(
        <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    
                        <BookShelf 
                        title="Current Reading" 
                        update={props.update}
                        shelf={"currentlyReading"}
                        books={props.books}/>
                        <BookShelf 
                        title="Want to Read" 
                        update={props.update}
                        shelf={"wantToRead"}
                        books={props.books}/>
                        <BookShelf 
                        title="Read" 
                        update={props.update}
                        shelf={"read"}
                        books={props.books}/>
                    
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
                </div>
            </div>
    );
}

