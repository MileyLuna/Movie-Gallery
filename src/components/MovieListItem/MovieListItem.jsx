import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';



function MovieListItem({ movie }) {
        //trigger an action
        const dispatch = useDispatch();
        //trigger page change
        const history = useHistory();


    //function for movie selector
    const handleSelect = () => {
        //log to show button is registered 
        console.log('Select Btn clicked');

        //perform this action to grab selected movie information
        dispatch({ type: 'FETCH_GENRES', payload: movie.id })
        //change current view to detail page upon click
        history.push('/details')
    }

    return (
        <div key={movie.id}  onClick={handleSelect}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
        </div>
    )
}

export default MovieListItem;