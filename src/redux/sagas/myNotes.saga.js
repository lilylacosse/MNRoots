import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// all sagas in this file communicate with /api/mynotes route

// WORKER SAGAS: will be fired on based on dispatched action
//  READ - GET
function* fetchMyNotes() {
  // fetchMyNotes saga retrieves the notes saved in the notes column of the user table in the db
  // the notes are then saved to the myNotes reducer
  try {
    const myNotes = yield axios.get("/api/mynotes");
    console.log(`myNotes in Saga:`, myNotes);
    yield put({ type: "SET_MY_NOTES", payload: myNotes.data });
  } catch (error) {
    console.log("client side myNotes GET request failed", error);
  }
}

// UPDATE - PUT
function* updateMyNotes(action) {
  // updateMyNotes saga updates the notes column in the user table of the db
  try {
    yield axios.put(`/api/mynotes`, action.payload);
    console.log(`updateMyNotes Saga:`, action.payload);
    yield put({ type: "FETCH_MY_NOTES" });
  } catch (error) {
    console.log("client side myNotes PUT request failed", error);
  }
}

function* myNotesSaga() {
  yield takeLatest("FETCH_MY_NOTES", fetchMyNotes);
  yield takeLatest("UPDATE_MY_NOTES", updateMyNotes);
}

export default myNotesSaga;
