import {
  ADD_PERSON,
  ADD_PERSONS,
  EDIT_PERSON,
  DELETE_PERSON,
  ACCEPT_PERSON,
  REJECT_PERSON,
} from "../Actions/constants";

export const initialState = {
  loading: false,
  error: false,
  currentPerson: {},
  persons: [],
};

const propertyListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      console.log("case ADD_PERSON data is: ", action);
      state.currentPerson = action.data;
      break;
    case ADD_PERSONS:
      console.log("case ADD_PERSONS data is: ", action);
      state.persons = action.data;
      break;
    case EDIT_PERSON:
      console.log("case EDIT_PERSON data is: ", action);
      state.userData = action.data;
      break;
    case DELETE_PERSON:
      console.log("case DELETE_PERSON data is: ", action);
      state.userData = action.data;
      break;
    case ACCEPT_PERSON:
      console.log("case ACCEPT_PERSON data is: ", action);
      state.userData = action.data;
      break;
    case REJECT_PERSON:
      console.log("case REJECT_PERSON data is: ", action);
      state.userData = action.data;
      break;
    case "DELETE_HOUSE_SUCCESS":
      const index = state.data
        .map(function (item) {
          return item.id;
        })
        .indexOf(action.payload);

      if (index > -1) {
        state.data.splice(index, 1);
      }

      return {
        ...state,
        error: false,
        response: true,
        data: state.data,
      };
    case "DELETE_HOUSE_FAIL":
      return {
        ...state,
        message: "failed to delete house",
        error: true,
        response: true,
      };

    default:
      return state;
  }
};

export default propertyListReducer;
