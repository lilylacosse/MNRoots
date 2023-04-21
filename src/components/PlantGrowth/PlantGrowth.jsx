import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// component renders Plant Growth for MnPlant Card
function PlantGrowth({ growth }) {
    // console.log(`PlantGrowth growth var:`, growth);
    let months = growth.bloom_months
    return (
        <div>
            <div>MN Plant Growth</div>
            {/* {months.map((month) => { return <div>{month}</div> })} */}
        </div >

    );
}

export default PlantGrowth;