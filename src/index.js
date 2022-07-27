import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchSelectedMovie);
    yield takeEvery('FETCH_GENRE', fetchSelectedGenres);
}

//!-----------SAGA-----------------------------------------
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch (error) {
        console.log('ERROR in fetchAllMovies:', error);
    }

}

function* fetchSelectedMovie(action) {
    try {
        // console.log('fetchSelectedMovie plays:', action.payload);
        const selectedMovie = yield axios.get(`/api/movie/details/${action.payload}`);
        yield console.log('selected movie is:', selectedMovie.data);
        yield put({ type: 'SET_MOVIES', payload: selectedMovie.data })
    }
    catch (error) {
        console.log(' ERROR in fetchSelectedMovie:', error);

    }
}

function* fetchSelectedGenres(action) {
    try {
        
        // console.log('fetchSelectedGenres plays:', action.payload);
        const selectedGenres = yield axios.get(`/api/genre/details/${action.payload}`);
        yield console.log('selected genre is:', selectedGenres.data);
        yield put({ type: 'SET_GENRES', payload: selectedGenres.data });

    }
    catch (error) {
        console.log('ERROR fetchSelectedGenres:', error);
    }
}


//!-------------REDUCERS----------------------------------
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// const moviesDetails = (state = {}, action) => {
//     switch (action.type) {
//         case 'SET_MOVIES_DETAILS':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        // moviesDetails,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
