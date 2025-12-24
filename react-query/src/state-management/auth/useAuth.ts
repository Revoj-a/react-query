import { useContext } from "react";
import AuthActionContext from "./loginStatusContext";

const useAuth = () => useContext(AuthActionContext);

export default useAuth;
