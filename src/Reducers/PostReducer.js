export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_CLOTHES":
      return action.payload;
    default:
      return state;
  }
};
