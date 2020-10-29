export const initialState = {
    bookStore: [],
    selectedBook: [],
    check: false,
    error: {}
}

export default function reducer ( state = initialState, action){
    console.log("action-type ",action.type);
    console.log("action-data ",action.payload );
    switch(action.type){
        case 'GET_ALL_BOOKS':
            return {
                ...state,
                bookStore: action.payload
            }
        case 'GET_ALL_BOOKS_ERROR':
            return {
                ...state,
                check: true,
                error: action.payload
            }
        case 'VIEW_BOOK':
            return {
                ...state,
                selectedBook: action.payload
            }
        default:
            return state;
    }
}
