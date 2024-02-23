import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import "../Styles/errorPageStyle.css";

function ErrorPageOne(props) {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="errorPage text-center">
      <div className="container">
        <div className="col-md-6 mx-auto">
          <h1> Unexpected Application Error! </h1>
          <h2 className="">{error.statusText || error.message}</h2>
          <p>💿 Hey developer 👋 You can</p>
          <p>
            provide a way better UX than this when your app throws errors by
            providing your own ErrorBoundary or errorElement prop on your route.
          </p>
          <div className="btnGroup text-center mt-4">
            <button
              className="btn btn-danger fs-3 px-4"
              onClick={() => {
                navigate("/", { replace: true });
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPageOne;
