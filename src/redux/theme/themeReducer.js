import { types } from './themeTypes';

const initialState = 'dark';

export const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_THEME:
      return payload;

    default:
      return state;
  }
};
