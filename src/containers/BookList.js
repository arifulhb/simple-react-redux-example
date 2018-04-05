import React , {Component} from 'react';
import { connect } from 'react-redux';

import { selectBook}  from '../actions/BookActions';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList(){

        return this.props.books.map((book) => {
            return (
              <a onClick = { () => {  this.props.selectedBook(book) }}
                  key={book.ISBN}
                  className="list-group-item list-group-item-action"
                  style={{'cursor': 'pointer'}}>{book.title}</a>
            );
        });
    }


    render() {
        return (
            <div className="book-details col-sm-6 col-lg-6">
                <p><strong>Book List</strong></p>
                <div className="list-group col-sm-12">
                    { this.renderList()}
                </div>
            </div>
        );


    }
}

function mapStateToProps(state) {

    return {
      books: state.books
    };
}

//anything return from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed to all our reducers
    //selectBook is reducer here
    return bindActionCreators( { selectedBook: selectBook}, dispatch);
}

//
export default connect(mapStateToProps, mapDispatchToProps)(BookList);