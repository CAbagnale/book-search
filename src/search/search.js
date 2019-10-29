import React from 'react';
import './search.css';
import PrintType from '../printType/printType';
import BookType from '../bookType/bookType';
import BookList from '../bookList/bookList';

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            search: '',
            printType: '',
            bookType: ''
        };
    }
    
    setSearchTerm = (term) => {
        this.setState({
          search: term
        });
    };

    createURL = (search, printType, bookType) => {
        const address = 'https://www.googleapis.com/books/v1/volumes?';
        const url = `${address}q=${search}&filter=${bookType ||
          'ebooks'}&printType=${printType || 'all'}&maxResults=40`;
        console.log(url);
        return url;
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            books: []
        })
        const url = this.createURL(
            this.state.search,
            this.state.printType,
            this.state.bookType
        )
        fetch(url, {
            method: 'GET',
            apiKey: 'AIzaSyBm2G0qTNBsOj-WCSQYHEXd4KIXhazrc5c',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data =>
              data.items.map(items => {  
                const book = {
                  title: items.volumeInfo.title,
                  author: items.volumeInfo.authors,
                  image: items.volumeInfo.imageLinks.smallThumbnail,
                  price: items.saleInfo.saleability,
                  description: items.volumeInfo.description,
                  buy: items.saleInfo.buyLink
                };
      
                this.setState({ books: [...this.state.books, book] });
                return book;
              }),
        );
    }

    bookFilter = filter => {
        this.setState({ 
            bookType: filter 
        });
    };
    
    printFilter = filter => {
        this.setState({ 
            printType: filter 
        });
    };

    render() {
        return (
            <div className='search-bar'>
                <div className='search-section'>
                    <form onSubmit={event => this.onSubmit(event)}>
                        <label htmlFor='search'>Search:</label>
                        <input
                            type='text'
                            name='search'
                            onChange={event => this.setSearchTerm(event.target.value)}
                        />
                        <button type='submit' >
                            Search
                        </button>
                    </form>
                </div>
                <div className='search-section'>
                    <PrintType printFilter={filter => this.printFilter(filter)} />
                    <BookType bookFilter={filter => this.bookFilter(filter)} />
                </div>
                <BookList books={this.state.books} />
            </div>
            
        )
    }
}