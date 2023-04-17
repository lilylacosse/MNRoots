import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function MnPlants(props) {

    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Functional Component');

    return (
        <div>
            <h2></h2>

        </div>
    );
}

export default MnPlants;