import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);