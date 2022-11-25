import { useEffect, useState } from "react";

const useUsers = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.isSeller) {
            setIsSeller(data.isSeller);
            setIsUsersLoading(false)
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
