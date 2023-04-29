import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function MnPlantItem({ plant, selected }) {
    console.log(`plant:`, plant, selected);
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);

    function dispatchPlant(plantId) {
        setIsSelected(!isSelected)
        dispatch({
            type: "ADD_MY_PLANT",
            payload: plantId
        })
    }

    return (
        <div className={isSelected ? "itemSelected" : "item"} key={plant.id}>
            <h4 className="grid-item genus">{plant.genus}</h4>
            <img className="grid-item" src={plant.image_url} width="200" height='280' />
            <div className="grid-item sciName">{plant.scientific_name}</div>
            <div className="grid-item county"><b>County:</b> {plant.county}</div>
            <div className="grid-item year"><b>Discovery:</b> {plant.year}</div>
            {plant.habitat ? (<div className="grid-item  habitat"><b>Habitat:</b> {plant.habitat}</div>) : (<div></div>)}
            <button className="grid-item  saveToGarden" disabled={isSelected} onClick={() => dispatchPlant(plant.id)} >Save to My Garden</button>
        </div>
    );
}

export default MnPlantItem;
