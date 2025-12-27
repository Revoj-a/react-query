import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return <p>User {params.id}</p>;
};

export default UserDetail;
