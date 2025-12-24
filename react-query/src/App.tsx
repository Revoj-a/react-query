import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/reducers/taskReducer";

import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";
import loginStatusReducer from "./state-management/reducers/loginStatusReducer";
import AuthActionContext from "./state-management/contexts/loginStatusContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(loginStatusReducer, "");
  return (
    <AuthActionContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthActionContext.Provider>
  );
}

export default App;
