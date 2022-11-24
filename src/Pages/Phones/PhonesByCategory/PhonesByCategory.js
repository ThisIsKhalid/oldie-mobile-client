import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Phone from "./Phone";

const PhonesByCategory = () => {
  const { category } = useParams();

  const { data: phones = [] } = useQuery({
    queryKey: ["phones"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories/${category}`);
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl text-gray-800 font-medium text-center">
        Categories:{" "}
        <span className="text-secondary">
          {category} (<small>{phones.length}</small>)
        </span>
      </h1>
      <div className="grid md:grid-cols-2 gap-5 my-10 px-5">
        {phones?.map((phone) => (
          <Phone key={phone._id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};

export default PhonesByCategory;
