const INITIAL_STATE = {
    city: {},
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "CITY":
        return {
          ...state,
          city: action.payload,
        };
      default:
        return state;
    }
  };
  