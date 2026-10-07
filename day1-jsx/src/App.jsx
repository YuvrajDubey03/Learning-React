import React from 'react'
import ProductCard from './ProductCard'
import { useState } from 'react'

const App = () => {
  console.log("App component rendered");
const[productsData , setProductsData] =useState(  [
  {
    id: 1,
    title: "Wireless Headphones",
    description:
      "Comfortable wireless headphones with noise cancellation and long battery life.",
    price: 2499,
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    title: "Smart Watch",
    description:
      "A stylish smartwatch with fitness tracking and heart-rate monitoring.",
    price: 3499,
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    title: "Running Shoes",
    description:
      "Lightweight and comfortable running shoes designed for daily workouts.",
    price: 2999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 4,
    title: "Laptop",
    description:
      "Powerful laptop suitable for programming, office work, and entertainment.",
    price: 54999,
    imageUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    description:
      "RGB mechanical keyboard with responsive keys and a durable design.",
    price: 3999,
    imageUrl:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
  },
  {
    id: 6,
    title: "Gaming Mouse",
    description:
      "High-precision gaming mouse with adjustable DPI and customizable buttons.",
    price: 1499,
    imageUrl:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
  },
  {
    id: 7,
    title: "Backpack",
    description:
      "Spacious and water-resistant backpack suitable for college and travel.",
    price: 1299,
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  },
  {
    id: 8,
    title: "Sunglasses",
    description:
      "Classic UV-protected sunglasses with a lightweight and stylish frame.",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
  },
  {
    id: 9,
    title: "Coffee Mug",
    description:
      "Minimal ceramic coffee mug perfect for your morning tea or coffee.",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500",
  },
  {
    id: 10,
    title: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with clear sound and powerful bass.",
    price: 1999,
    imageUrl:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
  },
]);
const handleDelete = (id) => {
  console.log("Deleting:", id);

  setProductsData((prevProducts) =>
    prevProducts.filter((product) => product.id !== id)
  );
};





  return (
    <div>
      <h1>data is rendering</h1>
      <div className="flex flex-wrap gap-4">
        {productsData.map((elem)=>{
          return <ProductCard key={elem.id} product={elem} del={handleDelete}/>
        })}
      </div>
    </div>
  )
}

export default App
