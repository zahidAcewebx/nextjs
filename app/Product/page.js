import React from 'react';

const ProductPage = () => {
  // Array of sample products (for demonstration)
  const products = [
    {
      id: 1,
      name: 'Sample Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
      imageUrl: '/path/to/product1/image.jpg',
    },
    {
      id: 2,
      name: 'Sample Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 29.99,
      imageUrl: '/path/to/product2/image.jpg',
    },
    {
      id: 3,
      name: 'Sample Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 29.99,
      imageUrl: '/path/to/product2/image.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
       {products.map(product => (
         <div key ={ product.id}>
          <h1>{product.name}</h1>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        

         </div>
       ))}
    </div>
  );
};

export default ProductPage;

