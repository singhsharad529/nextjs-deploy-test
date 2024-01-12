import { useRouter } from "next/router";
import React from "react";

function User() {
  const { query } = useRouter();

  return <div>A {query.name} page</div>;
}

export default User;
