import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';


import './Details.css';


function Details () {
    //trigger page change
    const history = useHistory();
    const dispatch = useDispatch();
    const {id} = useParams();

    //transfer over selected movie and genre store to append on DOM
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    
    const handleBack = () => {
        console.log('back Btn clicked');

        //upon click change current view to home page 
        history.push('/');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: movies.id })
    },[])

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRE', payload: movies.id })
    },[])

    return (
        <div className="container"> 
                <h2>{movies[id].title}</h2>
                <h3>Genre:</h3>
                    {genres.map((genre, i) => {
                        return (
                        <h5 key={i}>{genre.name}</h5>
                        );
                    })}
        <div className="detailContainer">
            <div className="image">
                <img src={movies[id].poster} className="image"/>
            </div>

            <div className="description">
                <h3>{movies[id].description}</h3>
            </div>
            </div>
        
            <button className="backBtn" onClick={handleBack}> Back </button>
        </div>
    )
}


export default Details;
