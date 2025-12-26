import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetailsPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return <h1>User</h1>;
};

export default UserDetailsPage;
