import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";

export const getSmurfs = () => dispatch =>{
    dispatch({type: GET_SMURFS_START});
}