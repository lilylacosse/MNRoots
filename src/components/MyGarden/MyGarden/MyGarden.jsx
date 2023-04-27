import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MyNotes from "../MyNotes/MyNotes";
import "./MyGarden.css"
import BodyColor from "../../BodyColor/BodyColor";

// component renders favorite plants based on user ID - data comes from users_favorite table in db
// also allows for deleting plants from MyGarden
function MyGarden() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: "FETCH_MY_GARDEN" });
    }, []);

    const myGarden = useSelector((store) => store.myGarden);
    const [deleteBoolean, setDeleteBoolean] = useState(false)
    // console.log(`myNotes:`, myNotes);
    // console.log(`myGarden:`, myGarden);

    function engageDeleteMode() {
        setDeleteBoolean(!deleteBoolean)
    }

    function deletePlant(plantId) {
        console.log(`In Delete Plant, plant.id:`, plantId);

        dispatch({
            type: "DELETE_MY_PLANT",
            payload: plantId
        })
    }


    return (
        <center className='myGarden'>
            <BodyColor color={'#87A488'} />
            <h1>My Garden</h1>

            <MyNotes />

            <h2>Plants</h2>

            <button
                className="editPlantsBtn"
                onClick={engageDeleteMode}>
                {deleteBoolean ? 'View Plants' : 'Edit Plants'}
            </button>
            <div className="containerMargin">
                <section className="myContainer">
                    {myGarden ? (
                        myGarden.map((plant) => {
                            return <div className="myItem" key={plant.id}>
                                <h4
                                    className="grid-item genus">
                                    {plant.genus}
                                </h4>
                                <img
                                    className="grid-item"
                                    src={plant.image_url}
                                    width="200"
                                    height='280' />
                                <div
                                    className="grid-item sciName">
                                    {plant.scientific_name}
                                </div>
                                <div
                                    className="grid-item county">
                                    <b>County:</b> {plant.county}
                                </div>
                                <div className="grid-item year">
                                    <b>Discovery:</b> {plant.year}
                                </div >
                                {plant.habitat ? (
                                    <div className="grid-item habitat">
                                        <b>Habitat:</b> {plant.habitat}
                                    </div>
                                ) : (
                                    <div></div>)
                                }
                                {deleteBoolean &&
                                    <button
                                        className="deleteBtn"
                                        onClick={() => deletePlant(plant.id)}>
                                        Delete Plant
                                    </button>
                                }
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
