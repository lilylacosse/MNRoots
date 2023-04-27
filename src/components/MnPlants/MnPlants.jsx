import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MnPlants.css"
import MnPlantItem from "./MnPlantItem";
import BodyColor from "../BodyColor/BodyColor";

function MnPlants() {

  const dispatch = useDispatch();
  const history = useHistory();
  const mnPlants = useSelector((store) => store.mnPlants);

  useEffect(() => {
    dispatch({ type: "FETCH_MN_PLANTS" });
  }, []);

  return (
    <center>
      <BodyColor color={'#AFA4F3'} />
      <h1>Minnesota Native Plants</h1>
      <div>Peruse through Minnesota's wealth of native plants, save plants you like the most to plant in your native garden</div>
      <br />
      <div>Plants and Plant Data are sourced from the Minnesota Bell Museum</div>
      <br />
      <button className="viewMyGarden" onClick={() => { history.push('/mygarden') }}>View My Garden</button>


      <div className="containerMargin">
        <section className="container">{mnPlants ?
          mnPlants.map((plant) => {
            console.log(`in PLANT MAP:`, plant);
            return <MnPlantItem plant={plant} />
          }) : <div>...Loading</div>
        }
        </section>
      </div>
    </center >
  );
};

export default MnPlants;
