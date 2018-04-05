export function selectBook(book){

    //needs to return an action, an object with type property
    return {
        type: 'SELECTED_BOOK',
        payload: book
    }

}