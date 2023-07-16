import React from "react";
import Card from "./Card";

function Products() {
  return (
    <div className='mt-6 grid grid-cols-responsive gap-2'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Products;
