import React,{Component} from 'react'
import Book from './Book'

export default class BookShelf extends Component{


    render(){
        let {shelf, books, title, update} = this.props;
        let filteredBooks = books.filter((b)=>(b.shelf === shelf));

        return(<div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {filteredBooks.map((book)=>(
                        <li key={book.id}>
                            <Book update={update} book={book}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>)
    }
}
