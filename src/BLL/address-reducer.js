import {addressAPI} from "../DAL/API";

const initialState = {
    streets: null
}

export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDRESS/SET-STREETS": {
            return {...state, streets: action.streets};
        }
        default:
            return state;
    }
};

// actions
export const setStreets = streets => ({type: "ADDRESS/SET-STREETS", streets});

// thunks
export const getStreets = () => dispatch => {
    addressAPI.getStreets()
        .then(res => {
            // res.data.reduce((a, c) => a.concat(c))
            // console.log(res.data)
            dispatch(setStreets(res.data.flat()));
        })
    // .catch(e => {
    //     const errorMessage = e.response?.data?.error || "Unknown error!";
    //     dispatch(errorRequestAC(errorMessage));
    // })
    // .finally(() => dispatch(loaderAC(false)));
}