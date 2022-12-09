import React, { useContext } from "react";
import ChangeProfile from "./ChangeProfile";
import { AppContext } from "./App";

const Profile = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      This is a Profile Page.{userName}
      <ChangeProfile />
    </div>
  );
};

export default Profile;
