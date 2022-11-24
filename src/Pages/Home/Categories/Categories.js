import { useQuery } from "@tanstack/react-query";
import React from "react";

const Categories = () => {

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = res.json();
      return data;
    },
  });
  console.log(categories);

  return (
    <div>
      <h1>Categories</h1>
      <div></div>
    </div>
  );
};

export default Categories;
