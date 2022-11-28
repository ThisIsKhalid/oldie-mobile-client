import { useEffect, useState } from "react";

const useUsers = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(
        `https://b612-used-products-resale-server-side-this-is-khalid.vercel.app/users/${email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.isSeller) {
            setIsSeller(data.isSeller);
            setIsUsersLoading(false);
          }
          if (data.isBuyer) {
            setIsBuyer(data.isBuyer);
            setIsUsersLoading(false);
          }
        });
    }
  }, [email]);
  return { isSeller, isBuyer, isUsersLoading };
};

export default useUsers;
