import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { createGenerateClassName } from "@material-ui/core";

function Details () {
    //trigger page change
    const history = useHistory();
    const dispatch = useDispatch ();

    //transfer over selected movie and genre store to append on DOM
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    
    // need to load:
        // all genres --> genres table
        // all movie details --> movie table
    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: movies.id})
    })

    const handleBack = () => {
        console.log('back Btn clicked');
        //clear page
        // dispatch({ type: 'CLEAR_PAGE'})
        //upon click change current view to home page 
        history.push('/');
    }





    return (

        <div>
            <div className="image">
                <img src={movies.poster}/>
            </div>

            <div>
                <h1>{movies.title}</h1>
                <h2>{genres.name}</h2>
                <h3>{movies.description}</h3>
            </div>
        
            <button onClick={handleBack}> Back </button>
        </div>
    )
}

export default Details;
