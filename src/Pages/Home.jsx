import React from "react";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$49",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: "$79",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our E-Commerce Store
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Shop the latest gadgets and accessories at unbeatable prices!
        </p>
        <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h3>
                <p className="text-indigo-600 font-bold mt-2">
                  {product.price}
                </p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
