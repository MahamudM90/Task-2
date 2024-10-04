import React from 'react';

const Card = ({ img, name, details }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center md:mt-[400px]  max-sm:m-4 hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <img src={img} alt={name} className="md:w-full md:h-48 max-sm:w-fit max-sm:h-fit" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className='font-light'>{details}</p>
      <br></br>
      <button className='w-[112px] h-[40px] bg-slate-200 hover:bg-slate-300 rounded font-thin font-Arial'>Add To Cart</button>
    </div>
  );
};

export default Card;
