import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
        inventore et quasi sunt quaerat aliquam ducimus tenetur commodi
        pariatur, consequuntur facilis nihil neque deleniti aliquid odit eveniet
        quibusdam dignissimos. Nisi. Omnis, impedit? Excepturi odio facere
        tenetur ipsum assumenda eius a aliquam consectetur voluptas aspernatur
        soluta pariatur quisquam praesentium deleniti optio fugit asperiores
        perspiciatis repellat dicta, dignissimos possimus iusto accusantium
        officiis!
      </p>
      <Link to="/users">Users</Link>
    </>
  );
};

export default HomePage;
