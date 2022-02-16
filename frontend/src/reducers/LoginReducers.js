const INITIAL_STATE = {
  user: {},
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "SIGNUP":
      return {
        ...state,
      };

    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};
