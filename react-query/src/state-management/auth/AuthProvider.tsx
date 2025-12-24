import { ReactNode, useReducer } from "react";
import AuthActionContext from "./loginStatusContext";

interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const loginStatusReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

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
