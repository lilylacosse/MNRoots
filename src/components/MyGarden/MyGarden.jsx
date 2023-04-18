import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// component renders favorite plants based on user ID - data comes from users_favorite table in db 
// also allows for deleting plants from MyGarden
function MyGarden() {

    const myPlants = useSelector((store) => store.myPlants);
    const [deletedPlant, setDeletedPlant] = useState('');

    return (
        <div>
            <h2>My Garden</h2>
            {/* TO DO - Map myPlants */}

        </div>
    );
}

export default MyGarden;