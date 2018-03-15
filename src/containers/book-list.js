import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

//result will end up as props
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//result will end up as props
function mapDispatchToProps(dispatch) {
  //pass result of selectBook to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote BookList from Component to Container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
