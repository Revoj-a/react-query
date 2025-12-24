import { useContext } from "react";
import AuthActionContext from "../contexts/loginStatusContext";

const useAuth = () => useContext(AuthActionContext);

export default useAuth;
