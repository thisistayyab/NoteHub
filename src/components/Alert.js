import React from "react";

function Alert(props) {
  return (
    <>
    <div style={{height: "50px"}}>
    {props.Alert && <div className={`alert alert-success alert-dismissible fade show`}role="alert">
      <strong>{props.Alert.type}</strong>: {props.Alert.msg}
    </div>}
    </div>
    </>
  );
}

export default Alert;
