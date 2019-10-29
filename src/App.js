import React from 'react';
import './App.css'
import Search from './search/search';

export default class App extends React.Component {
  render() {
    return ( 
      <>
        <header>
          <h1 className='header-title'>Google Book Search</h1>
        </header>
        <Search />
      </>
    )
  }
}