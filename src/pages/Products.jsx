import React from 'react';

const Products = () => {
  return (
    <main>
      <section id="products" className="min-h-screen py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl md:text-6xl font-modern-negra mb-10 text-center">
            Our Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="card">
              <img 
                src="/images/small.jpg"
                alt="Solar Cabinet Dryer - Small" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3">Small Cabinet Dryer</h3>
                <p className="mb-4">Perfect for small-scale farmers and home use. Capacity of 10kg of produce.</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="card">
              <img 
                src="/images/medium.jpg"
                alt="Solar Cabinet Dryer - Medium" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3">Medium Cabinet Dryer</h3>
                <p className="mb-4">Ideal for medium-sized farms. Capacity of 25kg of produce.</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="card">
              <img 
                src="/images/big.jpg"
                alt="Solar Cabinet Dryer - Large" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3">Large Cabinet Dryer</h3>
                <p className="mb-4">Commercial-grade dryer for large operations. Capacity of 50kg of produce.</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
