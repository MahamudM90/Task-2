import React from 'react';

const Card = ({ img, name, details }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center  max-sm:m-4">
      <img src={img} alt={name} className="w-full h-48 object-cover mb-4 rounded-lg "/>
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className='font-light'>{details}</p>
      <br></br>
      <button className='w-[110px] h-[40px] bg-slate-200 hover:bg-slate-300 rounded font-thin font-Arial'>Add To Cart</button>
    </div>
  );
};

export default Card;
