const SET_COUNT = "SET_COUNT";

const initialState = {
  items: [],
  isFetching: true,
  count: 0,
};

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: payload,
      };
      break;

    default:
      break;
  }
};

export const setCount = (count) => ({ type: SET_COUNT, payload: count });
