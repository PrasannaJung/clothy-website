import React from "react";
import Navigation from "../components/Navigation";

function AddToCart() {
  return (
    <main className='h-screen bg-[#dfddda]'>
      <Navigation />
      <h1 className='font-bold font-primary text-3xl my-16 text-center'>
        Add Product
      </h1>
      <form
        action=''
        className='bg-[#f5c1c1] w-3/4 md:max-w-3xl mx-auto flex flex-col gap-4 px-8 sm:px-16 py-8 rounded-lg'
      >
        <div className='flex flex-col'>
          <label htmlFor='title'>Product Title</label>
          <input
            className=' rounded-md px-3 py-1 outline-none'
            type='text'
            name='title'
            id='title'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='price'>Product Price</label>
          <input
            className=' rounded-md px-3 py-1 outline-none'
            type='number'
            name='price'
            id='price'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='description'>Product Description</label>
          <textarea
            className=' rounded-md px-3 py-1 outline-none'
            name='description'
            id='description'
            cols='20'
            rows='10'
          ></textarea>
        </div>
        <div className='text-center'>
          <button className='px-4 py-2 bg-gray-900 text-white font-bold font-accent rounded-md'>
            Add Product
          </button>
        </div>
      </form>
    </main>
  );
}

export default AddToCart;
