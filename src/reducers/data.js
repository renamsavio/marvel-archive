import { cloneDeep, map, forEach } from 'lodash';

const INITIAL_STATE = {
  nothing: {},
  byIndex: {},
  allIndex: []
};

const doNothing = (state = INITIAL_STATE, { data }) => {
  console.log('doing whatever')
  return state;
}

const getLink = (state, { payload }) => {
  const newState = cloneDeep(state);

  const { links } = payload;

  forEach(links, (item, index) => newState.byIndex[index] = item);
  newState.allIndex = map(links, (item, index) => index);
  return newState;
};

export const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DO_SOMETHING':
      return doNothing(state, action);
    case 'GET_SUCCESS_LINK':
      return getLink(state, action);
    case 'GET_ERROR_USER':
      return state
    default:
      return INITIAL_STATE;
  }
}