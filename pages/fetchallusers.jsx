import React, { useEffect, useState } from "react";

function fetchallusers() {
  const [users, setusers] = useState([]);

  console.log(users);

  useEffect(() => {
    async function fetchUsers() {
      const data = await fetch("https://dummyjson.com/users");
      setusers(await data.json());
    }

    fetchUsers();
  }, []);

  return (
    <>
      <div>
        {users &&
          users.users &&
          users.users.map((user) => <li>{user.firstName}</li>)}
      </div>
      <div>bottom</div>
    </>
  );
}

export default fetchallusers;
