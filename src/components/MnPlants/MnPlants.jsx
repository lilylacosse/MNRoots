import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MnPlants.css";
import MnPlantItem from "./MnPlantItem";
import BodyColor from "../BodyColor/BodyColor";

function MnPlants() {
  const dispatch = useDispatch();
  const history = useHistory();
  const mnPlants = useSelector((store) => store.mnPlants);
  const myGarden = useSelector((store) => store.myGarden);

  useEffect(() => {
    dispatch({
      type: "FETCH_MN_PLANTS",
      payload: "genus"
    });
    dispatch({ type: "FETCH_MY_GARDEN" });
  }, []);

  return (
    <center>
      <BodyColor color={"#8E84CC"} />
      <h1>Minnesota Native Plants</h1>
      <div>
        Peruse through Minnesota's wealth of native plants, save plants you like
        the most to plant in your native garden
      </div>
      <div>
        Plants and Plant Data are sourced from the Minnesota Bell Museum
      </div>
      <button
        className="viewMyGarden"
        onClick={() => {
          history.push("/mygarden");
        }}
      >
        View My Garden
      </button>
      <select>

      </select>
      <div className="containerMargin">
        <section className="container">
          {mnPlants ? (
            mnPlants.map((plant) => {
              // myGarden.map((plantToCompare) => {
              //   if (plant.id === plantToCompare.plant_id) {
              //     return <MnPlantItem plant={plant} selected={true} />;
              //   }
              // })
              return <MnPlantItem plant={plant} />;
            })
          ) : (
            <div>...Loading</div>
          )}
        </section>
      </div>
    </center>
  );
}

export default MnPlants;
