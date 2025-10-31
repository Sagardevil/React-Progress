import React from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser, password, setPassword }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
