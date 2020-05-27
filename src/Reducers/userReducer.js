import { FETCH_USERS } from "../Actions/userAction";

const initState = {
  user: [],
  users: {},
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
