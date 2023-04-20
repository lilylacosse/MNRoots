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
        dispatch({ type: "FETCH_MY_GARDEN" });
    }, []);

    const myGarden = useSelector((store) => store.myGarden);

    const [deletedPlant, setDeletedPlant] = useState("");
    console.log(`myGarden:`, myGarden);

    return (
        <center>
            <h2>My Garden</h2>
            {/* TO DO - Add CARD features */}
            {/* TO DO - Map myPlants */}
            {myGarden ? (
                myGarden.map((plant) => {
                    return <div key={plant.id}>

                        <h3>{plant.scientific_name}</h3>
                        <img src={plant.image_url} width="200" height='400' />
                        <div><b>Genus:</b> {plant.genus}</div>
                        <div><b>County:</b> {plant.county}</div>
                        <div><b>Discovery:</b> {plant.year}</div>
                    </div>;
                })
            ) : (
                <div>Loading</div>
            )}
        </center>
    );
}

export default MyGarden;
