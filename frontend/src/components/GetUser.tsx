import React, { useState, useEffect } from "react";
import IUser from "../../../shared/interfaces/IUser";
import Constants from "../../../shared/Constants/Constants";

export default function GetUser() {
  const numbers = [1, 2, 3, 4, 5];
  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  });

  const fetchUser = async () => {
    try {
      const response = await fetch(
        Constants.API_URL + "/get-user?email=test1@test.com"
      );
      if (response.status === 200) {
        const json = await response.json();
        setUser(json.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <p>Get single user (response of type IUser):</p>
      {user ? (
        <ul>
          {numbers.map((number) => {
            return <li>{number}</li>;
          })}
        </ul>
      ) : (
        "Fetching..."
      )}
    </>
  );
}
