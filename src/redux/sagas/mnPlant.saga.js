import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Sagas: will be fired on based on dispatched action
function* fetchMnPlants() {
  try {
    const mnPlants = yield axios.get("/api/mnplants");
    console.log(`mnPlants in Saga:`, mnPlants);
    yield put({ type: "SET_MN_PLANTS", payload: mnPlants.data });
  } catch (error) {
    console.log("MN Plants GET request failed", error);
  }
}

function* mnPlantSaga() {
  yield takeLatest("FETCH_MN_PLANTS", fetchMnPlants);
}

export default mnPlantSaga;
