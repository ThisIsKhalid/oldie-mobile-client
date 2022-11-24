import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name } = category;
  return (
    <Link
      to={`/categories/${name}`}
      className="text-2xl font-medium py-5 text-secondary hover:text-accent border border-secondary shadow-md hover:border-accent  rounded-md text-center"
    >
      {name}
    </Link>
  );
};

export default Category;