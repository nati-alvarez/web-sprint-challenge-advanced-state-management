import {GET_SMURFS_START, GET_SMURFS_SUCCESS} from "../actions";

const initialState = {
    smurfs: [],
    loadingSmurfs: false,
    error: null
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_SMURFS_START:
            return {
                ...state,
                loadingSmurfs: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                loadingSmurfs: false,
                error: null
            }
        default:
            return state;
    }
}