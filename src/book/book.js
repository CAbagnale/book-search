import React, { Component } from 'react';
import './book.css';

class Book extends Component {
  render() {
    return (
      <li>
        <a href={this.props.books.buy}><img src={this.props.books.image} /></a>
        <h2><a href={this.props.books.buy}>{this.props.books.title}</a></h2>
        <h3>Author: {this.props.books.author}</h3>
        <h4>{this.props.books.description}</h4>
      </li>
    );
  }
}

export default Book;