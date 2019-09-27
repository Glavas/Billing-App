import React from "react";
import Header from "../Header";
import ProfileContainer from "../ProfileContainer";
import "../styles/ContentContainer.css";
import "../styles/Profile.css";

const profilePage = props => {
  return (
    <div className="content-container">
      <Header
        title="Ihr Profil"
        text="Hier sind Ihre persönlichen Daten."
        username={props.username}
      />
      <ProfileContainer editUserData={props.editUserData} username={props.username}/>
    </div>
  );
};

export default profilePage;
