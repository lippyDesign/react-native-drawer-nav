export default (state = null, action) => { // if state is undefined (runs first time), return null as we can't return undefined
    switch(action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state; // if a mysterious action comes through, just return what was returned last time
    }
};