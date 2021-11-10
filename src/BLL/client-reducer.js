import {clientAPI} from "../DAL/API";
import {setCurrentFlat} from "./address-reducer";

const initialState = {
    clients: [],
    
    // flats: null,
    // currentStreet: null,
    // currentHouse: null,
    // currentFlat: null,
}

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLIENT/SET-CLIENTS": {
            return {...state, clients: action.clients};
        }

        // case "ADDRESS/SET-CURRENT-STREET":
        // case "ADDRESS/SET-CURRENT-HOUSES":
        // case "CLIENT/SET-OPEN-MODAL": 
        //     return {...state, ...action.payload};

        default:
            return state;
    }
};

// actions
export const setClients = clients => ({type: "CLIENT/SET-CLIENTS", clients});


// thunks
export const getClients = flatID => dispatch => {
    clientAPI.getClients(flatID)
        .then(res => {
            dispatch(setClients(res.data));
            dispatch(setCurrentFlat(flatID))
        })
}