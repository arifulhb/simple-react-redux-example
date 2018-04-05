/**
 * Created by ariful.haque on 05/04/2018.
 */
import React, {Component} from 'react';
import { connect} from 'react-redux';


class BookDetails extends Component{

    render(){


        if (!this.props.activeBook){
            return (
                <div className="book-details col-sm-6 col-lg-6" >Select a book to get started.</div>
            )
        }

        return (
          <div className="book-details col-sm-6 col-lg-6">
              <header><h5>Book Details</h5></header>
              <section >
                    <p>
                        <span className="title">Title: </span>{ this.props.activeBook.title }<br/>
                        <span className="isbn">ISBN: </span>{ this.props.activeBook.ISBN }<br/>
                        <span className="Year">Year: </span>{ this.props.activeBook.year }
                    </p>
              </section>
          </div>
        );

    }

}


function mapStateToProps(state) {

    return {
        activeBook: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetails);