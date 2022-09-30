const initialState = {
    moviesLoaded: [],
    moviesFavorite : [],
    movieDetail : {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIES':
            return{
                ...state,
                moviesLoaded: [action.payload]
            }   
        case 'ADD_FAVORITES':
            return {
                ...state,
                moviesFavorite: [...state.moviesFavorite, action.payload]
            }
        case 'REMOVE_FAVORITES':
            return {
                ...state,
                moviesFavorite: state.moviesFavorite.filter(x=> x.imdbID!== action.payload.imdbID)
            }
        case 'GET_DETAIL_MOVIE':
            return {
                ...state,
                movieDetail: action.payload
            }
        default:
            return state;
    }
}