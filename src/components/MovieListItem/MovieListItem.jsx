import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import './MovieListItem.css'



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

        dispatch({ type: 'FETCH_DETAILS', payload: movie.id })
        dispatch({ type: 'FETCH_GENRE', payload: movie.id })
        
        //change current view to detail page upon click
        history.push(`/details/${movie.id}`)
    }

    return (
        <div key={movie.id}  className='title'>
            <p>{movie.title} <br></br>
            <img src={movie.poster} alt={movie.title} onClick={handleSelect} className="image1"/>
            </p>
            
        </div>
    )
}

export default MovieListItem;