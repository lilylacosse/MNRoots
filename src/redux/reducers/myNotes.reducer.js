const myNotes = (state = [], action) => {
  switch (action.type) {
    case "SET_MY_NOTES":
      return action.payload;
    case "CAPTURE_NOTES_UPDATE":
      return action.payload;
    default:
      return state;
  }
};

export default myNotes;
