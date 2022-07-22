import { useHistory } from "react-router-dom";


function Details () {
    //trigger page change
    const history = useHistory();

    const handleBack = () => {
        console.log('back Btn clicked');
        //change current view to home page upon click
        history.push('/');
    }
    return (

        <div>
<button onClick={handleBack}> Back </button>
        </div>
    )
}

export default Details;