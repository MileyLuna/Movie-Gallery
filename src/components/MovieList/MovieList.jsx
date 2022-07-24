import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieListItem from '../MovieListItem/MovieListItem';



function MovieList() {
    //trigger an action
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //bring in movies store to obtain array of movies
    const movies = useSelector(store => store.movies);


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map((movie, i) => {
                    return (
                        <MovieListItem key={i} movie={movie}/>
                    )
                })}
            </section>
        </main>

    );
}

export default MovieList;