const INITIAL_STATE = {
    loader: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOADER_START":
            return { loader: true }
        case "LOADER_END":
            return { loader: false }
        default:
            return state;
    }

}