import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// all sagas in this file communicate with /api/mygarden route

// WORKER SAGAS: will be fired on based on dispatched action
// CREATE - POST
function* addMyPlant(action) {
  // addMyPlant saga saves user selected plants to users_favs table in db which joins with the native_plants table
  try {
    console.log(action.payload);
    yield axios.post(`/api/mygarden/${action.payload}`);

    yield put({ type: "FETCH_MY_GARDEN" });
  } catch (error) {
    console.log("client side myGarden POST request failed:", error);
  }
}

//  READ - GET
function* fetchMyGarden() {
  // fetchMyGarden saga retrieves all plants the user has saved to their "garden"
  // all plants are then saved to myGarden reducer
  try {
    const myGarden = yield axios.get("/api/mygarden");
    console.log(`myGarden.data in Saga:`, myGarden.data);
    yield put({ type: "SET_MY_GARDEN", payload: myGarden.data });
  } catch (error) {
    console.log("client side myGarden GET request failed", error);
  }
}

// DELETE - DELETE
function* deleteMyPlant(action) {
  // deleteMyPlant saga updates the notes column in the user table of the db
  try {
    yield axios.put(`/api/mygarden/${action.payload}`);
    console.log(`deleteMyPlant Saga:`, action.payload);
    yield put({ type: "FETCH_MY_GARDEN" });
  } catch (error) {
    console.log("client side myGarden DELETE request failed", error);
  }
}
function* myGardenSaga() {
  yield takeLatest("ADD_MY_PLANT", addMyPlant);
  yield takeLatest("FETCH_MY_GARDEN", fetchMyGarden);
  yield takeLatest("DELETE_MY_PLANT", deleteMyPlant);
}

export default myGardenSaga;
