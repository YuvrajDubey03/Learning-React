import React from 'react'

const ProductCard = ({product , del}) => {
 return (
    <div className="w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="h-48 w-full overflow-hidden bg-gray-100">
        <img
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>

      {/* Content */}
      <div className="flex min-h-48 flex-col p-4">

        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          {product.title.substring(0, 20)}
        </h2>

        <p className="line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Price */}
        <p className="mt-3 text-lg font-bold text-green-600">
          ${product.price}
        </p>

        {/* Delete */}
        <button
          onClick={() => del(product.id)}
          className="mt-auto w-full rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600 active:scale-95"
        >
          Delete
        </button>

      </div>
    </div>
  );
};


export default ProductCard