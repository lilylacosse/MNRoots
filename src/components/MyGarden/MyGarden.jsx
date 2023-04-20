import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MyPlant from '../MyPlant/MyPlant';
import { useEffect } from 'react';

// component renders favorite plants based on user ID - data comes from users_favorite table in db 
// also allows for deleting plants from MyGarden
function MyGarden() {
    useEffect(() => {
        dispatch({ type: "FETCH_MY_GARDEN" });
    }, [])
    const myPlants = useSelector((store) => store.myPlants);
    const [deletedPlant, setDeletedPlant] = useState('');

    return (
        <center>
            <h2>My Garden</h2>
            {/* TO DO - Add CARD features */}
            {/* TO DO - Map myPlants */}
            <div>
                {
                    // if/else
                    movieDetails ?
                        (
                            <>
                                <h2>{movieDetails.title}</h2>
                                <img src={movieDetails.poster} />
                                <br />
                                <div>{movieDetails.description}</div>
                                <br />
                                <div>{movieDetails.genres.map((genre, i) => { return <h4 key={i}>{genre}</h4> })}</div>
                                <br />
                                <button onClick={handleBack}>Back</button>
                            </>
                        )
                        : (<div>Loading...</div>)
                }
            </div >
            <MyPlant plant={plant} />

        </center>
    );
}

export default MyGarden;