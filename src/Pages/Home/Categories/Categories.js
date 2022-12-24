import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://b612-used-products-resale-server-side-this-is-khalid.vercel.app/categories"
      )
      .then((res) => {
        setCategories(res.data);
      })
      .catch(function (error) {
        toast.error(error.message);
      })
      .then(function () {});
  }, []);

  return (
    <section className="bg-slate-100 py-20">
      <div className=" container mx-auto">
        <h1 className="text-3xl font-medium text-black mb-10 uppercase text-center">
          Categories
        </h1>
        <div className="grid lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 grid-cols-3 gap-5 px-3">
          {categories?.map((category) => (
            <Category key={category._id} category={category}></Category>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
