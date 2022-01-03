import "./App.css";
import Img from "./assets/img.jpg";
import CompoProfile from "./profile/compoprofile";
import React, { Component } from "react";

const info = {
  fullName: "name :Rania khattab ",
  bio: "cv",
  profession: "profession :Etudiante",
  url: Img,
};

export default class App extends Component {
  handelChange(e) {
    e.preventDefault();
    alert(info.fullName);
  }
  render() {
    return (
      <div>
        <CompoProfile info={info} handelChange={this.handelChange.bind(this)} />
      </div>
    );
  }
}
