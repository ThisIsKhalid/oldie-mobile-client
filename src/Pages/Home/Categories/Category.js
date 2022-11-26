import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { brand } = category;
  return (
    <Link
      to={`/categories/${brand}`}
      className="text-xl font-medium py-2 text-secondary hover:text-accent border border-secondary shadow-md hover:border-accent  rounded-md text-center"
    >
      {brand}
    </Link>
  );
};

export default Category;
