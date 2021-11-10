import {addressAPI, clientAPI} from "../DAL/API";
import { getClients } from "./client-reducer";

const initialState = {
    streets: [],
    houses: [],
    flats: [],
    currentStreet: '',
    currentHouse: '',
    currentFlat: '',
    isOpenModal: false,
} // MUI ругается на стартовое значение null

export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDRESS/SET-STREETS": {
            return {...state, streets: action.streets};
        }
        case "ADDRESS/SET-HOUSES": {
            return {...state, houses: action.houses};
        }
        case "ADDRESS/SET-FLAT": {
            return {...state, flats: action.flats};
        }
        case "ADDRESS/SET-OPEN-MODAL": 
        case "ADDRESS/SET-CURRENT-STREET":
        case "ADDRESS/SET-CURRENT-HOUSES":
        case "ADDRESS/SET-CURRENT-FLAT":
            return {...state, ...action.payload};

        default:
            return state;
    }
};

// actions
export const setStreets = streets => ({type: "ADDRESS/SET-STREETS", streets});
export const setHouses = houses => ({type: "ADDRESS/SET-HOUSES", houses});
export const setFlats = flats => ({type: "ADDRESS/SET-FLAT", flats});
export const setCurrentStreet = currentStreet => ({type: "ADDRESS/SET-CURRENT-STREET", payload: {currentStreet}});
export const setCurrentHouse = currentHouse => ({type: "ADDRESS/SET-CURRENT-HOUSES", payload: {currentHouse}});
export const setCurrentFlat = currentFlat => ({type: "ADDRESS/SET-CURRENT-FLAT", payload: {currentFlat}});
export const setOpenModal = isOpenModal => ({type: "ADDRESS/SET-OPEN-MODAL", payload: {isOpenModal}});

// thunks
export const getStreets = () => dispatch => {
    addressAPI.getStreets()
        .then(res => {
            dispatch(setStreets(res.data))
        })
}
export const getHouses = streetID => dispatch => {
    addressAPI.getHouses(streetID)
        .then(res => {
            dispatch(setHouses(res.data))
            dispatch(setCurrentStreet(streetID))
        })
}
export const getFlats = houseID => dispatch => {
    addressAPI.getFlats(houseID)
        .then(res => {
            dispatch(setFlats(res.data))
            dispatch(setCurrentHouse(houseID))
        })
}
export const addClient = payload => (dispatch, getState) => {
    const flatID = getState().address.currentFlat
    clientAPI.addClient(payload)
        .then(res => {
            // console.log(res); // data: {id: 70512, result: 'Ok'}
            dispatch(getClients(flatID));
            dispatch(setOpenModal(false))
        })
        .catch(e => {
            console.log(e)
            // const errorMessage = e.response?.data?.error || "Unknown error!";
            // dispatch(setError(errorMessage));
        })
}