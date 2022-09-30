export function getMovies(title) {
    return function (dispatch) {
        return fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b3989f79&s='+title)
        .then(res=> res.json())
        .then(data=> dispatch({
            type: 'GET_MOVIES', payload: data
        }))
    }
}

export function addFavorites(payload) {
    return {
        type: 'ADD_FAVORITES', payload
    }
}

export function removeFavorites(payload){
    return {
        type: 'REMOVE_FAVORITES', payload
    }
}

export function getDetailMovie(id) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?i=${id}&apikey=b3989f79`)        
        .then(res => res.json())
        .then(data=> dispatch({
            type: 'GET_DETAIL_MOVIE', payload: data
        }))
    }
}