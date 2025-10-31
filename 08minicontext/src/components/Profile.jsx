import React, { useContext } from "react";
import UserContext from "../context/Usercontext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Login</div>;
  } else {
    return (
      <div>
        Welcome {user.username}
        <br />
        password = {user.password}
      </div>
    );
  }
}

export default Profile;
