import React, { ReactNode, useReducer } from "react";
import loginStatusReducer from "./reducers/loginStatusReducer";
import AuthActionContext from "./contexts/loginStatusContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginStatusReducer, "");
  return (
    <AuthActionContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthActionContext.Provider>
  );
};

export default AuthProvider;
