import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// component renders favorite plants based on user ID - data comes from users_favorite table in db 
// also allows for deleting plants from MyGarden
function MyPlant({ plant }) {
    const dispatch = useDispatch();
    function deletePlant(plantId) {
        dispatch({
            type: "DELETE_MY_PLANT",
            payload: plantId
        })
    }
    return (
        <div>
            <h2>Plant Card</h2>
            {/* TO DO - render plant data in card format*/}
            <button onClick={() => { deletePlant(plant.id) }} >Delete Plant</button >

        </div >
    );
}

export default MyPlant;