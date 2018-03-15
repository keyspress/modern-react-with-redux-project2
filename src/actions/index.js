export function selectBook(book) {
  // selectBook is an ActionCreator, returns and actions
  // object with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
