import ALERT_TYPES from "../types/alertTypes";

const defaultOptions = Object.seal({
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  variant: "default", // default | success | info | warning | error
  persist: false,
  autoHideDuration: 3000,
});

const initialState = {
  show: false,
  message: null,
  options: {
    ...defaultOptions,
    key: new Date().valueOf()
  }
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case ALERT_TYPES.SHOW:
      return {
        ...state,
        show: true,
        message: action.payload.message,
        options: {
          ...defaultOptions,
          ...action.payload.options,
          key: action.payload.options.key ? action.payload.options.key : new Date().valueOf()
        }
      };

    case ALERT_TYPES.HIDE:
      return initialState;

    default:
      return state;
  }
}
