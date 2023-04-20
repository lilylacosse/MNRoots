import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PlantImage from "../PlantImage/PlantImage";
import PlantSpecs from "../PlantSpecs/PlantSpecs";
import PlantGrowth from "../PlantGrowth/PlantGrowth";


function MnPlants() {

    const dispatch = useDispatch();
    const history = useHistory();
    const mnPlants = useSelector((store) => store.mnPlants);


    useEffect(() => {
        dispatch({ type: "FETCH_MN_PLANTS" });
    }, []);

    const selectedPlants = [];
    // if plant id is in selectedPlants array, conditionally render that card a new color 

    function updateSelectedPlants(newFavPlant) {
        console.log(`selectedPlants OG:`, selectedPlants);
        selectedPlants.push(newFavPlant);
        console.log(`selectedPlants Now:`, selectedPlants);
    }

    function dispatchPlant(plantId) {
        dispatch({
            type: "ADD_MY_PLANT",
            payload: plantId
        })
        updateSelectedPlants(plantId)
    }

    return (
        <center>
            <h2>Minnesota Native Plants</h2>
            <div>Peruse through Minnesota's wealth of native plants, save plants you like the most to plant in your native garden</div>
            <br />
            <div>Plants and Plant Data are sourced from the Minnesota Bell Museum</div>
            <br />
            <button onClick={() => { history.push('/mygarden') }}>View My Garden</button>

            <br />
            {/* TO DO - Add CARD features */}
            <div>{mnPlants ?

                mnPlants.map((plant) => {
                    return (
                        <div key={plant.id}>
                            <img src={plant.image_url} width="200" height='280' />
                            <br />
                            <button onClick={() => dispatchPlant(plant.id)} >Save to My Garden</button>
                        </div>
                    );
                })
                : <div>Loading</div>
            }
            </div>
        </center>
    )
};

export default MnPlants;
