import { Fragment } from "react";
import { Spinner } from "../";
import "./Loader.scss";

const Loader = (props) => {
  const msg = props.message || "Loading, please wait...";
  return (
    <Fragment>
      {props.isLoading && (
        <div className="Loader__container">
          <div className="Loader__interior">
            <div className="Loader__spinner">
              <Spinner />
            </div>
            <div className="Loader__message">{msg}</div>
          </div>
        </div>
      )}
      {props.children}
    </Fragment>
  );
};

export default Loader;
