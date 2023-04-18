import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


function MnPlants() {

    const dispatch = useDispatch();
    const mnPlants = useSelector((store) => store.mnPlants);
    console.log(`mnPlants in MnPlants Component:`, mnPlants);

    const [favPlant, setFavPlant] = useState("");
    // console.log(`plant.images.leaf:`, mnPlants[6].images.leaf[0]);

    useEffect(() => {
        dispatch({ type: "FETCH_MN_PLANTS" });
    }, []);

    return (
        <div>
            <h2>Minnesota Native Plants</h2>
            <button>View My Garden</button>
            <div>
                {mnPlants.map((plant) => {
                    return (
                        <div key={plant.id}>
                            <div>{plant.common_name}</div>
                            <div>{plant.images.map((type) => { (<div>{type}</div>) })}</div>
                            <button>Save to Your Garden</button>

                            {/* <div>{plant.images.leaf.map((pic) => { return (<div key={pic.id}><img src={pic.image_url} /></div>) })} */}
                            {/* I THINK THIS IMAGE ASPECT NEEDS TO BE ITS OWN COMPONENT */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MnPlants;
