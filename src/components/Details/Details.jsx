import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import './Details.css';


function Details () {
    //trigger page change
    const history = useHistory();
    // const {id} = useParams();

    //transfer over selected movie and genre store to append on DOM
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    
    const handleBack = () => {
        console.log('back Btn clicked');

        //upon click change current view to home page 
        history.push('/');
    }

    return (
        <div className="container"> 
                <h1>{movies[0].title}</h1>
                <h3>Genre: {genres[0].name}</h3>
        <div className="detailContainer">
            <div className="image">
                <img src={movies[0].poster} className="image"/>
            </div>

            <div>
                <h3>{movies[0].description}</h3>
            </div>
            </div>
        
            <button className="backBtn" onClick={handleBack}> Back </button>
        </div>
    )
}


export default Details;
