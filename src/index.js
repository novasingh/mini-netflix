import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { SnackbarProvider } from "notistack";
import Snackbar from "./components/Snackbar";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./redux/store";

const app = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Suspense>
        <SnackbarProvider maxSnack={4}>
          <Snackbar />
            <App />
        </SnackbarProvider>
      </Suspense>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
