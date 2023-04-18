import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


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

    function dispatchPlant(plant) {
        dispatch({
            type: "",
            payload: plant
        })
    }

    return (
        <div>
            <h2>Minnesota Native Plants</h2>
            <button onClick={() => { history.push('/yourgarden') }}>View My Garden</button>
            <div>
                {mnPlants.map((plant) => {
                    return (
                        <div key={plant.id}>
                            <div>{plant.common_name}</div>
                            <button onClick={() => dispatchPlant(plant)} >Save to Your Garden</button>

                            {/* <div>{plant.images.leaf.map((pic) => { return (<div key={pic.id}><img src={pic.image_url} /></div>) })} */}
                            {/* I THINK THIS IMAGE ASPECT NEEDS TO BE ITS OWN COMPONENT */}
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default MnPlants;
