import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    //trigger an action
    const dispatch = useDispatch();
    //trigger page change
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //bring in movies store to obtain array of movies
    const movies = useSelector(store => store.movies);

    //function for movie selector
    const handleSelect = () => {
        //log to show button is registered 
        console.log('Select Btn clicked');
        //change current view to detail page upon click
        history.push('/details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={handleSelect}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;