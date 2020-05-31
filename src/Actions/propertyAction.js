import {
  ADD_PERSON,
  ADD_PERSONS,
  DELETE_PERSON,
  EDIT_PERSON,
  ACCEPT_PERSON,
  REJECT_PERSON,
  SET_PRIVILEGE_PERSON,
} from './constants';

export function addPerson(data) {
  return {
    type: ADD_PERSON,
    data,
  };
}

export function addPersons(data) {
  return {
    type: ADD_PERSONS,
    data,
  };
}
