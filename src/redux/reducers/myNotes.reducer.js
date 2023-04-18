const myNotes = (state = [], action) => {
  switch (action.type) {
    case "SET_MY_NOTES":
      return action.payload;
    // case "UNSET_MY_NOTES":
    //   //   TO-DO: On Log Out?
    //   return [];
    default:
      return state;
  }
};

export default myNotes;
