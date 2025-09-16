import React from 'react';

const Home = () => {
  return (
    <main>
      <section id="home" className="min-h-screen flex-center">
        <div className="container mx-auto px-5 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-modern-negra mb-6">
              Solar Cabinet Dryer
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Innovative solar-powered drying technology for agricultural products, 
              reducing post-harvest losses and improving food security.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg"
                    onClick={() => window.location.href = 'https://en.wikipedia.org/wiki/Solar_power'}>
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/images/medium.jpg" 
              alt="Solar Cabinet Dryer" 
              className="rounded-lg shadow-lg max-h-[500px] object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
