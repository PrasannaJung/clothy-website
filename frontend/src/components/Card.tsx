import React from "react";
import ss from "../assets/men/ss.jpg";
import { MdOutlineAdd } from "react-icons/md";

function Card() {
  return (
    <div className='shadow-md flex flex-col'>
      <img className='object-cover' src={ss} alt='' />
      <div className='px-2'>
        <div className='flex justify-between'>
          <p>Sweatshirt</p>
          <p>Rs.220</p>
        </div>
        <div className='flex justify-between'>
          <p> &rarr; Info</p>
          <div className='flex items-center bg-black text-white'>
            <MdOutlineAdd />
            <p>Add To Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
