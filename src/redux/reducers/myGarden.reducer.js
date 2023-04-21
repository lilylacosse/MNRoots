const myGarden = (state = [], action) => {
  switch (action.type) {
    case "SET_MY_GARDEN":
      return action.payload;
    case "UNSET_MY_GARDEN":
      //   TO-DO: On Log Out?
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default myGarden;
