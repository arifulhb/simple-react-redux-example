import React, { Component } from 'react';

import BookList from '../containers/BookList';
import BookDetails from '../containers/BookDetails';

export default class App extends Component {


  render() {

      /**
       * Application layout
       */
      return (

        <div>
            <header>Header</header>
            <hr/>
            <setion className="app-body row">
                <BookDetails/>
                <BookList />
            </setion>
            <hr/>
            <footer>
                <p><small>Copyright (c)</small></p>
            </footer>
        </div>

     );
  }
}
