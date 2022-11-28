import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const { data: dbUser = {} } = useQuery({
    queryKey: ["dbUser"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/isVerfied/${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center">
      <div className="font-mono mt-10" >
        <h1 className="text-3xl font-semibold">
          Name: <span className="  text-primary">{user?.displayName}</span>
          <span className="text-base text-error">({dbUser?.role})</span>
        </h1>
        <h4 className="text-lg font-medium">
          Email: <span className="  text-secondary">{user?.email}</span>
        </h4>
        {dbUser?.verified && <p className="text-blue-500">Verified User</p>}
      </div>
    </div>
  );
};

export default Profile;
