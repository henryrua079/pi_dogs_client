import axios from "axios";

import { GET_DOGS, GET_DOGS_BY_NAME, GET_DOG_BY_ID, GET_TEMPERAMENTS, FILTER_BY_ORIGIN, FILTER_BY_TEMPERAMENT, ORDER_BY_NAME, ORDER_BY_WEIGHT, GET_CURRENT_USER, GET_DOGS_BY_USER_ID } from "./action-types";


// const URL_BASE = 'http://localhost:3001';



export const getCurrentUser = (user) => {
    return async function (dispatch) {
        return dispatch({ type: GET_CURRENT_USER, payload: user })
    }
}



export const createDog = (newDog) => {
    return function () {
        axios.post(`/dogs/`, newDog)
            .then(res => {
                alert(res.statusText)
            })
            .catch(err => {alert(err.response.data.error)})
    }
}



export const getDogs = () => {
    return async function (dispatch) {
        const allDogs = (await axios.get(`/dogs`)).data;
        dispatch({ type: GET_DOGS, payload: allDogs });
    };
};

export const getDogsByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/dogs/name?name=${name}`)
            return dispatch({ type: GET_DOGS_BY_NAME, payload: response.data })
        } catch (error) {
            alert(error.response.data.error)

        }
    }
}



export const getDogById = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/dogs/${id}`)
            return dispatch({ type: GET_DOG_BY_ID, payload: response.data })
        } catch (error) {
            alert(error.response.data.error)

        }
    }
}

export const deleteDogById = (id, userId) => {
    return function (dispatch) {
        axios.delete(`/dogs/${id}`)
            .then(res => {
                // alert(res.statusText);
                dispatch(getDogsByUserId(userId))
            })
            .catch(error => alert(error.response.data.error))
    }
}


export const getTemperaments = () => {
    return async function (dispatch) {
        const temperaments = (await axios.get(`/temperaments`)).data;
        dispatch({ type: GET_TEMPERAMENTS, payload: temperaments });
    }
}


export const getDogsByUserId = (userId) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/dogs/userid?userid=${userId}`)
            return dispatch({ type: GET_DOGS_BY_USER_ID, payload: response.data })
        } catch (error) {
            alert(error.response.data.error)
            return dispatch({ type: GET_DOGS_BY_USER_ID, payload: [] })
        }
    }
}




export const filterByOrigin = (origin) => {
    return { type: FILTER_BY_ORIGIN, payload: origin }
}




export const filterByTemperaments = (temperament) => {
    return { type: FILTER_BY_TEMPERAMENT, payload: temperament }
}

export const orderByName = (order) => {
    return { type: ORDER_BY_NAME, payload: order }
}

export const orderByWeight = (order) => {
    return { type: ORDER_BY_WEIGHT, payload: order }
}