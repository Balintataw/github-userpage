const initialState = {
    user: {},
    repos: {},
    data: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_USER':
            return {...state, data: action.payload}
        case 'GET_USER_REPOS':
            return {...state, repos: action.payload}
        default:
            return state
    }
}