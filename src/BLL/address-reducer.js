import {addressAPI} from "../DAL/API";

const initialState = {
    streets: [],
    houses: [],
    flats: [],
    currentStreet: '',
    currentHouse: '',
    currentFlat: '',
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

// thunks
export const getStreets = () => dispatch => {
    addressAPI.getStreets()
        .then(res => {
            dispatch(setStreets(res.data))
        })
    // .catch(e => {
    //     const errorMessage = e.response?.data?.error || "Unknown error!";
    //     dispatch(errorRequestAC(errorMessage));
    // })
    // .finally(() => dispatch(loaderAC(false)));
}
export const getHouses = streetID => dispatch => {
    addressAPI.getHouses(streetID)
        .then(res => {
            dispatch(setHouses(res.data))
            dispatch(setCurrentStreet(streetID))
        })
    // .catch(e => {
    //     const errorMessage = e.response?.data?.error || "Unknown error!";
    //     dispatch(errorRequestAC(errorMessage));
    // })
    // .finally(() => dispatch(loaderAC(false)));
}
export const getFlats = houseID => dispatch => {
    addressAPI.getFlats(houseID)
        .then(res => {
            dispatch(setFlats(res.data))
            dispatch(setCurrentHouse(houseID))
        })
    // .catch(e => {
    //     const errorMessage = e.response?.data?.error || "Unknown error!";
    //     dispatch(errorRequestAC(errorMessage));
    // })
    // .finally(() => dispatch(loaderAC(false)));
}