import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "./Category";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-semibold text-center text-error mb-5">
        Categories
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-5 px-3">
        {categories?.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
