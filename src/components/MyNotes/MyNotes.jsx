import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// component renders Notes from user table in db
// also allows for updating notes 
function MyNotes() {

    const notes = useSelector((store) => store.notes);
    const [updatedNotes, setUpdatedNotes] = useState('Functional Component');

    return (
        <div>
            <h2>My Notes</h2>
        </div>
    );
}

export default MyNotes;