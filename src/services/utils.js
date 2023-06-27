import _ from "lodash-es";
import { store } from "../redux/store";
import { showSnack } from "../redux/actions/alertActions";

const options = {
  variant: "error",
};

const extractErrorMessage = (data) => {
  if (_.isString(data)) {
    return data;
  }

  if (!data.error) {
    return "Something went wrong";
  }

  if (!_.isString(data.error)) {
    console.log(data.error);
  }

  return data.error;
};

export const errorHandler = ({ status, data }) => {
  switch (status) {
    case 401:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
     
      break;
    case 400:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      break;
    case 403:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      break;
    case 422:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      break;
    case 404:
      store.dispatch(showSnack({ message: "Resource not found", options }));
      break;
    default:
      store.dispatch(showSnack({ message: "Something went wrong", options }));
      break;
  }
};


