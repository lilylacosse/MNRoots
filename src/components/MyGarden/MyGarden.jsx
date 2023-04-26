import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import MyNotes from "../MyNotes/MyNotes";
import "./MyGarden.css"

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



    function deletePlant(plantId) {
        console.log(`In Delete Plant, plant.id:`, plantId);

        dispatch({
            type: "DELETE_MY_PLANT",
            payload: plantId
        })
    }


    return (
        <center>
            <h1>My Garden</h1>
            <MyNotes />
            <h2>Plants</h2>

            <div className="containerMargin">
                <section className="container">
                    {
                        myGarden ? (
                            myGarden.map((plant) => {
                                return <div className="item" key={plant.id}>

                                    <h4 className="grid-item genus">{plant.genus}</h4>
                                    <img className="grid-item" src={plant.image_url} width="200" height='280' />
                                    <div className="grid-item sciName">{plant.scientific_name}</div>
                                    <div className="grid-item county"><b>County:</b> {plant.county}</div>
                                    <div className="grid-item year"><b>Discovery:</b> {plant.year}</div >
                                    {plant.habitat ? (
                                        <div className="grid-item habitat">
                                            <b>Habitat:</b> {plant.habitat}</div>) : (<div></div>)
                                    }

                                    <button className="deleteBtn" onClick={() => deletePlant(plant.id)}>Delete Plant</button>
                                </div>;
                            })
                        ) : (
                            <div>Loading</div>
                        )
                    }
                </section>
            </div>
        </center >
    );
}

export default MyGarden;
