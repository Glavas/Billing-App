import React from "react";
import Profile from "./Profile";

const profileContainer = props => {
  return (
    <div className="profileContainer">
      <Profile editUserData={props.editUserData} />
    </div>
  );
};

export default profileContainer;
