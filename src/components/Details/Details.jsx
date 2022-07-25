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
                <h2>{movies[0].title}</h2>
                <h3>Genre:</h3>
                    {genres.map((genre, i) => {
                        return (
                        <h5 key={i}>{genre.name}</h5>
                        );
                    })}
        <div className="detailContainer">
            <div className="image">
                <img src={movies[0].poster} className="image"/>
            </div>

            <div className="description">
                <h3>{movies[0].description}</h3>
            </div>
            </div>
        
            <button className="backBtn" onClick={handleBack}> Back </button>
        </div>
    )
}


export default Details;
