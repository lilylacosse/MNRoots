import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// component renders Notes from user table in db
// also allows for updating notes 
function MyNotes() {

    const dispatch = useDispatch();
    const myNotes = useSelector((store) => store.myNotes)
    const [editBoolean, setEditBoolean] = useState(false)

    function engageEditMode() {
        // this func toggles between the user notes displaying as text or as an editable form 
        setEditBoolean(!editBoolean);
    }

    function captureNotes(notesEdits) {
        // this function saves notes edits to myNotes reducer, automatically updating the myNotes variable 
        // resulting in the user being able to see their edits in real time 
        dispatch({
            type: "CAPTURE_NOTES_UPDATE",
            payload: notesEdits
        })
    }

    function saveNotes(updatedNotes) {
        // 
        event.preventDefault();
        console.log(`updatedNotes:`, updatedNotes);
        // save updated notes to the db 
        dispatch({
            type: "SAVE_MY_NOTES",
            payload: { notes: updatedNotes }
        })
        //  now that the user is done making edits, display their notes as text 
        engageEditMode();
    }

    return (
        <center>
            <h2>My Notes</h2>
            {editBoolean ? (<form onSubmit={() => saveNotes(myNotes)}>
                <input type='text'
                    size='50'

                    onChange={(event) => captureNotes(event.target.value)}
                    placeholder="Enter New Notes Here"
                    value={myNotes}
                />
                <br />
                <button type='submit'>Save Notes</button>
            </form>) :
                (<div>
                    <div>{myNotes}</div>
                    <br />
                    <button onClick={engageEditMode}>Edit Notes</button>
                </div>)
            }
        </center>
    );
}

export default MyNotes;