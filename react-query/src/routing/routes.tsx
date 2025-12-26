import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserListPage from "./UserListPage";
import UserDetailsPage from "./UserDetailsPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
  { path: "/users/:id", element: <UserDetailsPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

export default router;
