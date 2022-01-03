import React from "react";
import Profile from "./Profile/Profile";
import userImg from "./images/user.jpg";

import "./styles.css";

export default function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName="khawla abdelghani"
        bio="Hello , my name is khawla abdelghani and i like web development"
        profession="studant"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={userImg}
          alt="avatar"
        />
      </Profile>
    </div>
  );
}
