const INITIAL_STATE = {
    file: {},
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "FILE":
        return {
          ...state,
          file: action.payload,
        };
      default:
        return state;
    }
  };
  