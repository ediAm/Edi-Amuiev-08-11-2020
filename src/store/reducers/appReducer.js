import {
  ADD_CITY_TO_FAVE,
  REMOVE_CITY_FROM_FAVE,
} from "../actions/actions-types";

const initialState = {
  favorites: []
};
// Function that add and remove favoriet citys in redux
const appReducer = (state = initialState, action) => {
  
  switch (action.type) {
    // Add city to favorites
    case ADD_CITY_TO_FAVE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    // Remove city from favorites
    case REMOVE_CITY_FROM_FAVE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (city) => city.key !== action.payload.key
        ),
      };
    default:
      return state;
  }
};

export default appReducer;
