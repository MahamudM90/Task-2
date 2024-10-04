import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const CardDetail = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('product.json')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <section id="cards" className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((card, index) => (
          <Card key={index} img={card.img} name={card.name} details={card.details} />
        ))}
      </div>
    </section>
  );
};

export default CardDetail;
