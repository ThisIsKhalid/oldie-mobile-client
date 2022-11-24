import React from "react";
import { useParams } from "react-router-dom";

const PhonesByCategory = () => {
  const { phones } = useParams();
  console.log(phones);
  return (
    <div>
      <h1>this is {phones}</h1>
    </div>
  );
};

export default PhonesByCategory;
