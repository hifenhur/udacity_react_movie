import React,{Component} from 'react'

export default class Book extends Component{
    
    render(){
        let {book, update} = this.props;
        let shelf = "none"
        
        if(book.shelf){
            shelf = book.shelf
        }

        return (<div className="book">
                    <div className="book-top">
                    {this.props.book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail}")` }}></div>}
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(event)=> update(book, event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.author}</div>
                </div>)
    }
}