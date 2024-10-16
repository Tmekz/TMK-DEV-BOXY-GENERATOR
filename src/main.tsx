import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// On commence par importer le provider et le store de redux
import { Provider } from "react-redux";
import { store } from "./store.tsx"; //store ne peut avoir de majuscule

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
