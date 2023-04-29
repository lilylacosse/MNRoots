import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Sagas: will be fired on based on dispatched action

// all sagas in this file communicate with /api/mnplants route

function* fetchMnPlants(action) {
  try {
    const mnPlants = yield axios.get(`/api/mnplants/${action.payload}`);
    console.log(`mnPlants in Saga:`, mnPlants);
    yield put({ type: "SET_MN_PLANTS", payload: mnPlants.data });
  } catch (error) {
    console.log("MN Plants GET request failed", error);
  }
}
// fetchMnPlants saga retrieves all MN Native plants from native_plants table in db
// all plants are then saved to mnPlants reducer
function* mnPlantSaga() {
  yield takeLatest("FETCH_MN_PLANTS", fetchMnPlants);
}

export default mnPlantSaga;
