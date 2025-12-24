import React, { Dispatch } from "react";
import { AuthAction } from "./AuthProvider";

interface AuthActionContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthActionContext = React.createContext<AuthActionContextType>(
  {} as AuthActionContextType
);

export default AuthActionContext;
