import React, { useState, useEffect } from "react";
import IUserWithPosts from "../../shared/interfaces/IUserWithPosts";
import Constants from "../../shared/Constants/Constants";

export default function GetUsersWithPosts() {
  const [usersWithPosts, setUsersWithPosts] = useState<Array<IUserWithPosts> | undefined>(undefined);

  useEffect(() => {
    if (!usersWithPosts) {
      fetchUsersWithPosts();
    }
  });

  const fetchUsersWithPosts = async () => {
    try {
      const response = await fetch(Constants.API_URL + "/get-users-with-posts");
      if (response.status === 200) {
        const json = await response.json();
        setUsersWithPosts(json.usersWithPosts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <p>Get all users with all their posts (response of type {'<'}Array{'<'}IUsersWithPosts{'>'}{'>'}):</p>
      {usersWithPosts ? JSON.stringify(usersWithPosts) : "Fetching..."}
    </>
  );
}
