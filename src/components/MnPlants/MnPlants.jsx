import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MnPlants.css"

function MnPlants() {

  const dispatch = useDispatch();
  const history = useHistory();
  const mnPlants = useSelector((store) => store.mnPlants);

  const [addPlant, updateAddPlant] = useState(false)


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
    disableButton
    dispatch({
      type: "ADD_MY_PLANT",
      payload: plantId
    })
    updateSelectedPlants(plantId)
  }

  return (
    <center>
      <h1>Minnesota Native Plants</h1>
      <div>Peruse through Minnesota's wealth of native plants, save plants you like the most to plant in your native garden</div>
      <br />
      <div>Plants and Plant Data are sourced from the Minnesota Bell Museum</div>
      <br />
      <button className="viewMyGarden" onClick={() => { history.push('/mygarden') }}>View My Garden</button>


      <div className="containerMargin">
        <section className="container">{mnPlants ?

          mnPlants.map((plant) => {
            return (
              <div className="item" key={plant.id}>
                <h4 className="grid-item genus">{plant.genus}</h4>
                <img className="grid-item" src={plant.image_url} width="200" height='280' />
                <div className="grid-item sciName">{plant.scientific_name}</div>
                <div className="grid-item county"><b>County:</b> {plant.county}</div>
                <div className="grid-item year"><b>Discovery:</b> {plant.year}</div>
                {plant.habitat ? (<div className="grid-item  habitat"><b>Habitat:</b> {plant.habitat}</div>) : (<div></div>)}
                <button className="grid-item  saveToGarden" onClick={() => dispatchPlant(plant.id)} >Save to My Garden</button>
              </div>
            );
          })
          : <div>Loading</div>
        }
        </section>
      </div>
    </center >
  )
};

export default MnPlants;
