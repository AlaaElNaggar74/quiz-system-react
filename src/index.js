import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from "./App";

import reportWebVitals from "./reportWebVitals";


import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import MainLayout from "./Pages/MainLayout";
import Welcome from "./Pages/Welcome";
import QuizPage from "./Pages/QuizPage";
import Statistics from "./Pages/Statistics";
import ErrorPageOne from "./Pages/ErrorPageOne";


// import Home from "./Pages/Home";
// import R from "./Pages/R";
// import Ggg from "./Pages/Ggg";


import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPageOne />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "home",
        element: <QuizPage />,
      },
    ],
  },
  {
    path: "statistics",
    element: <Statistics />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
