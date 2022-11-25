import { useEffect, useState } from "react";

const useUsers = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.isSeller) {
            setIsSeller(data.isSeller);
          }
          if (data.isBuyer) {
            setIsBuyer(data.isBuyer);
          }
        });
    }
  }, [email]);
  return { isSeller, isBuyer };
};

export default useUsers;
