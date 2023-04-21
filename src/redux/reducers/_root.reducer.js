import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import mnPlants from "./mnPlant.reducer";
import myGarden from "./myGarden.reducer";
import myNotes from "./myNotes.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  mnPlants, // stores all Minnesota native plants
  myGarden, // stores plants selected by user
  myNotes, // stores user's notes
});

export default rootReducer;
