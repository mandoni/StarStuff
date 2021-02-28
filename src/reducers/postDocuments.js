import { ACTION_TYPES } from '../Actions/postDocumnet';


const initialState = {
    list: []
}

export const postDocument = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
    
        default:
            return state;
}
}