import React, { useState } from "react";
import { useSelector } from "react-redux";
import MyPlant from "../MyPlant/MyPlant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// component renders favorite plants based on user ID - data comes from users_favorite table in db
// also allows for deleting plants from MyGarden
function MyGarden() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_MY_NOTES" });
    }, []);

    useEffect(() => {
        dispatch({ type: "FETCH_MY_GARDEN" });
    }, []);

    const myNotes = useSelector((store) => store.myNotes)
    const myGarden = useSelector((store) => store.myGarden);
    console.log(`myNotes:`, myNotes);
    console.log(`myGarden:`, myGarden);

    function editNotes() {
        console.log(`In Edit Notes:`,);
    }
    function deletePlant(plantId) {
        console.log(`In Delete Plant, plant.id:`, plantId);
    }


    return (
        <center>
            <h1>My Garden</h1>
            <h2>Notes</h2>

            {myNotes ? (
                <div>
                    <div>{myNotes}</div>
                    <br />
                    <button onClick={editNotes}>Edit Notes</button>
                </div>
            ) : (
                <div>Loading</div>
            )
            }

            <h2>Plants</h2>
            {/* TO DO - Add CARD features */}
            {myGarden ? (
                myGarden.map((plant) => {
                    return <div key={plant.id}>

                        <h4>{plant.genus}</h4>
                        <img src={plant.image_url} width="200" height='280' />
                        <div>{plant.scientific_name}</div>
                        <div><b>County:</b> {plant.county}</div>
                        <div><b>Discovery:</b> {plant.year}</div>
                        <button onClick={() => deletePlant(plant.id)}>Delete Plant</button>
                    </div>;
                })
            ) : (
                <div>Loading</div>
            )}
        </center>
    );
}

export default MyGarden;
