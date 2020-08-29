import {GET_SMURFS_START, GET_SMURFS_SUCCESS,
        CREATE_SMURF_START, CREATE_SMURF_SUCCESS} 
        from "../actions";

const initialState = {
    smurfs: [],
    loadingSmurfs: false,
    getSmurfsError: null,
    creatingSmurf: false,
    createSmurfError: null,
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
                getSmurfsError: null
            }
        case CREATE_SMURF_START:
            return {
                ...state,
                creatingSmurf: true
            }
        case CREATE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                creatingSmurf: false,
                createSmurfError: null
            }
        default:
            return state;
    }
}