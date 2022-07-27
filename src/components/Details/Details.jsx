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
    console.log('this ID is;', id);

    //transfer over selected movie and genre store to append on DOM
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    
    const handleBack = () => {
        console.log('back Btn clicked');

        //upon click change current view to home page 
        history.push('/');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id }) 
        dispatch({ type: 'FETCH_GENRE', payload: id })
    },[])

    // useEffect(() => {
    // },[])

    return (
        <div className="container"> 
                {/* <h2>{movies[0].title}</h2> */}

                {movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <h2>{movie.title}</h2>
                            <img src={movie.poster} className="image"/>
                            <h3>{movie.description}</h3>
                        </div>
                    )
                })}
                {/* <h3>Genre: {genres.name} </h3> */}
                <h3>Genre:</h3>
                    {genres.map((genre, i) => {
                        return (
                        <h5 key={i}>{genre.name}</h5>
                        );
                    })}

        {/* <div className="detailContainer">
            <div className="image">
                <img src={movies[0].poster} className="image"/>
            </div>

            <div className="description">
                <h3>{movies[0].description}</h3>
            </div>
            </div> */}
        
            <button className="backBtn" onClick={handleBack}> Back </button>
        </div>
    )
}


export default Details;


// {details?.map((detail) => {
//     return (
//         <div key={detail.id} >
//             <h3>{detail.title}</h3>
//             <img src={detail.poster} alt={detail.title}/>
//             <p>{detail.description}</p>
//         </div>
//     );
// })}