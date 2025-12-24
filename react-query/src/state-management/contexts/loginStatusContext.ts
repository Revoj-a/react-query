import { Dispatch } from "react";
import { AuthAction } from "../reducers/loginStatusReducer";
import React from "react";

interface AuthActionContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthActionContext = React.createContext<AuthActionContextType>(
  {} as AuthActionContextType
);

export default AuthActionContext;
