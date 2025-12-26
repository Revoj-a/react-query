import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <Link to="/users">Users</Link>
    </>
  );
};

export default HomePage;
