import { GET_DOGS, GET_TEMPERAMENTS, FILTER_BY_TEMPERAMENT, FILTER_BY_ORIGIN, ORDER_BY_NAME, GET_DOG_BY_ID,  ORDER_BY_WEIGHT, GET_DOGS_BY_NAME, CREATE_DOG, GET_USERS, GET_CURRENT_USER, GET_DOGS_BY_USER_ID } from "./action-types";


const initialState = {
    dogs: [],
    allDogs: [],
    currentDogs: [],
    temperaments: [],
    detail: [],
    currentuser:{},
    mydogs:[],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_CURRENT_USER:
            return {
                ...state,
                currentuser: action.payload
            }

        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }

        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload,
                currentDogs:[]
            };

        case GET_DOGS_BY_NAME:
            return {
                ...state,
                dogs: action.payload,
                currentDogs:action.payload,
            }
        case GET_DOG_BY_ID:
            return {
                ...state,
               detail : action.payload,
            }
        case CREATE_DOG: 
            return {
                ...state,
            }

        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,
            };

        case FILTER_BY_TEMPERAMENT:
            const allDogs =  state.allDogs
            const fil = action.payload === 'All' ? allDogs : allDogs.filter(dog => dog.Temperaments?.includes(action.payload))
            return {
                ...state,
                dogs: fil,
                currentDogs:[],
            };

            case GET_DOGS_BY_USER_ID:
            return {
                ...state,
                mydogs: action.payload
            };

        case FILTER_BY_ORIGIN:
            const allDogsAux =  state.allDogs
            const filAux = action.payload === 'CREATED' ? allDogsAux.filter(dog => dog.created) : allDogsAux.filter(dog => !dog.created)
            return {
                ...state,
                dogs: action.payload === 'All' ? allDogsAux : filAux,
                currentDogs: [],
            };

        case ORDER_BY_NAME:
            const allDogsAux1 = state.dogs.length? state.dogs: state.allDogs;
            const dogsOrder = action.payload === 'ASCENDENTE'
                ? allDogsAux1.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0;
                }) :
                allDogsAux1.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0;
                })
            return {
                ...state,
                currentDogs: dogsOrder,
                dogs: dogsOrder
            };

        case ORDER_BY_WEIGHT:
            const allDogsAux2 =  state.dogs.length? state.dogs: state.allDogs;
            // state.allDogs.map(dog => {
            //     return {
            //         id: dog.id,
            //         name: dog.name,
            //         height: dog.height,
            //         weight: dog.weight.split('-').flat(),//.map(el => parseInt(el)).reduce((prev, curr) => curr += prev) / (dog.weight.split('-').length),
            //         life_span: dog.life_span,
            //         image: dog.image,
            //         created: dog.created,
            //         Temperaments: dog.Temperaments,
            //     }
            // })



            const dogsOrder1 = action.payload === 'ASCENDENTE' ? allDogsAux2.sort((a, b) => a.weight.split('-')[0] - b.weight.split('-')[0]) : allDogsAux2.sort((a, b) => b.weight.split('-')[0] - a.weight.split('-')[0])

            return {
                ...state,
                currentDogs: dogsOrder1,
               // dogs: dogsOrder1,
            }

        default:
            return { ...state }
    }
};

export default rootReducer;