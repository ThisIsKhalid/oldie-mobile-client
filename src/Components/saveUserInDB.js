import { toast } from "react-toastify";

export const saveUserInDB = (name, email, role, setUserEmail) => {

  const user = { name, email, role, verified: false };

  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        toast.success("Successfully User Created");
        setUserEmail(email);
      }
      if (data.email === email) {
        toast.success(`Welcome back ${data.name}`);
        setUserEmail(email);
      }
    });
};
