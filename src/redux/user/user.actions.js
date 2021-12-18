import actionTypeNames from "../action.type.names";

const setCurrentUser = (user) => ({
  type: actionTypeNames.SET_CURRENT_USER,
  payload: user,
});
