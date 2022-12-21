import { CHANGE_THEME } from "../Types";

const initialState = {
  theme: "white",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        theme: state.theme === "white" ? "dark" : "white",
      };
    default:
      return state;
  }
}
