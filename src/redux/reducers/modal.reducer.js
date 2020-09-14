import { TOGGLE_MODAL } from "../actions/modal.actions";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};
