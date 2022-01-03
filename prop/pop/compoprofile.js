import React from "react";

export default function compoprofile(props) {
  return (
    <div className="profile">
      <h1> {props.info.bio} </h1>

      <br />
      <h1> {props.info.fullName} </h1>
      <br />
      <h1> {props.info.profession} </h1>
      <img src={props.info.url} alt="" />
      <button type="button" onclick={(e) => props.handelChange(e)}>
        Click Me!
      </button>
    </div>
  );
}
compoprofile.defaultProps = {};
