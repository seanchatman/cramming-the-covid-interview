import { ADD_ACTIVITY } from "../constants";
import uuid from "uuid";

const initialState = [{ id: 1, name: "gym", duration: "2 hours" }];

const activitiesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ACTIVITY:
      return [
        ...state,
        {
          id: uuid(),
          name: payload.name,
          duration: payload.duration,
        },
      ];
    default:
      return state;
  }
};

export default activitiesReducer;
