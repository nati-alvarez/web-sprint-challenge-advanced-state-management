import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";

export const CREATE_SMURF_START = "CREATE_SMURF_START";
export const CREATE_SMURF_SUCCESS = "CREATE_SMURF_SUCCESS"
export const CLEAR_CREATE_SMURF_SUCCESS = "CLEAR_CREATE_SMURF_SUCCESS";

export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";

export const getSmurfs = () => dispatch =>{
    dispatch({type: GET_SMURFS_START});
    axios.get("http://localhost:3333/smurfs").then(({data})=>{
        dispatch({type: GET_SMURFS_SUCCESS, payload: data});
    }).catch(err=>{
        console.log(err);
    })
}

export const createSmurf = smurf => dispatch =>{
    dispatch({type: CREATE_SMURF_START});
    axios.post("http://localhost:3333/smurfs", smurf).then(({data})=>{
        dispatch({type: CREATE_SMURF_SUCCESS, payload: data});
    }).catch(err=>{
        console.log(err);
    })
}

export const getSmurf = id => dispatch =>{
    axios.get(`http://localhost:3333/smurfs/${id}`).then(({data})=>{
        dispatch({type: GET_SMURF_SUCCESS, payload: data});
    })
}