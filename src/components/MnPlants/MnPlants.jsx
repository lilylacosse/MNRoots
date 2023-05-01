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

  const [filterBy, setFilterBy] = useState("Select Filter By");
  const [searchBy, setSearchBy] = useState("");

  console.log(`MINNESTOA PLANTS:`, mnPlants);
  useEffect(() => {
    dispatch({
      type: "FETCH_MN_PLANTS",
      payload: "genus",
    });
    dispatch({ type: "FETCH_MY_GARDEN" });
  }, []);

  useEffect(() => {
    dispatch({ type: "FETCH_MY_GARDEN" });
  }, []);

  function handleFilterBy(event) {
    setFilterBy(event.target.value);
    dispatch({
      type: "FETCH_MN_PLANTS",
      payload: event.target.value,
    });
  }

  function handleSearchBy(event) {
    setSearchBy(event.target.value);
    console.log(`search BY:`, event.target.value);
    dispatch({
      type: "SEARCH_MN_PLANTS",
      payload: event.target.value,
    });
  }
  function clearSearch() {
    setSearchBy("");
    dispatch({
      type: "FETCH_MN_PLANTS",
      payload: "genus",
    });
  }

  return (
    <center>
      <BodyColor color={"#8E84CC"} />
      <h1>Minnesota Native Plants</h1>
      <h3>Which plants speak to you?</h3>
      {/* <h4></h4>
      <div>Minnesota Bell Museum</div> */}
      <button
        className="viewMyGarden"
        onClick={() => {
          history.push("/mygarden");
        }}
      >
        View My Garden
      </button>
      <br />
      <div className="searchAndFilter">
        <div className="searchFilterCard">
          <label for="mnPlants">
            <b>Filter Plants By: </b>
          </label>
          <select
            className="filterInput"
            name="mnPlants"
            id="mnPlants"
            value={filterBy}
            onChange={handleFilterBy}
          >
            <option value="genus">Genus</option>
            <option value="year">Year</option>
            <option value="county">County</option>
          </select>
          <br />
          <label>
            <b>Search: </b>
          </label>
          <input
            className="searchInput"
            type="text"
            placeholder={searchBy}
            onChange={() => handleSearchBy(event)}
          />
          <br />
          {/* <button className="clearSearchBtn" onClick={clearSearch}>
            Clear Search
          </button> */}
        </div>
      </div>
      <div className="containerMargin">
        <section className="container">
          {mnPlants ? (
            mnPlants.map((plant) => {
              let inGarden = false;
              myGarden.map((plantToCompare) => {
                if (plant.id === plantToCompare.plant_id) {
                  inGarden = true;
                }
                // console.log(`inGarden:`, inGarden);
              });
              // console.log(`plant.id MAPPED:`, plant.id);
              return <MnPlantItem plant={plant} selected={inGarden} />;
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
