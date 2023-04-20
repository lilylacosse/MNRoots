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
    console.log(`mnPlants in MnPlants Component:`, mnPlants);

    const [favPlant, setFavPlant] = useState("");
    // console.log(`plant.images.leaf:`, mnPlants[6].images.leaf[0]);

    useEffect(() => {
        dispatch({ type: "FETCH_MN_PLANTS" });
    }, []);

    function dispatchPlant(plantId) {
        dispatch({
            type: "ADD_MY_PLANT",
            payload: plantId
        })
    }

    return (
        <center>
            <h2>Minnesota Native Plants</h2>
            <button onClick={() => { history.push('/mygarden') }}>View My Garden</button>
            {/* TO DO - Add CARD features */}
            <div>{mnPlants ?

                mnPlants.map((plant) => {
                    return (
                        <div key={plant.id}>
                            <img src={plant.image_url} />
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
