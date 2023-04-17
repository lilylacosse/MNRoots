const mnPlantReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MN_PLANTS":
      return action.payload;
    case "UNSET_MN_PLANTS":
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default mnPlantReducer;
