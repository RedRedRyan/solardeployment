import React from 'react';

const Technology = () => {
  return (
    <main>
      <section id="technology" className="min-h-screen py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl md:text-6xl font-modern-negra mb-10 text-center">
            Our Technology
          </h2>

          <div className="mb-16">
            <h3 className="text-3xl font-serif mb-6 text-center text-gradient">
              How Solar Cabinet Dryers Work
            </h3>

            <div className="card p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <img 
                    src="/images/bulb.jpg"
                    alt="Idea"
                    className="rounded-lg w-full h-auto"
                  />
                </div>

                <div>
                  <ol className="list-decimal pl-5 space-y-4">
                    <li className="text-lg">
                      <span className="font-bold">Solar Collection:</span> Our dryers use specialized solar collectors to capture and concentrate solar energy.
                    </li>
                    <li className="text-lg">
                      <span className="font-bold">Heat Transfer:</span> The collected heat is efficiently transferred to the drying chamber.
                    </li>
                    <li className="text-lg">
                      <span className="font-bold">Air Circulation:</span> A natural convection system ensures optimal air flow through the cabinet.
                    </li>
                    <li className="text-lg">
                      <span className="font-bold">Moisture Removal:</span> The heated air removes moisture from the produce, preserving it effectively.
                    </li>
                    <li className="text-lg">
                      <span className="font-bold">Temperature Control:</span> Built-in mechanisms maintain ideal drying temperatures for different products.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-serif mb-6 text-center text-gradient">
              Key Technological Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6">
                <div className="text-yellow-500 text-4xl mb-4">
                  <i className="fas fa-sun"></i>
                </div>
                <h4 className="text-xl font-bold mb-3">Enhanced Solar Collection</h4>
                <p>Our proprietary solar collection technology increases energy capture by up to 30% compared to traditional designs.</p>
              </div>

              <div className="card p-6">
                <div className="text-yellow-500 text-4xl mb-4">
                  <i className="fas fa-thermometer-half"></i>
                </div>
                <h4 className="text-xl font-bold mb-3">Smart Temperature Control</h4>
                <p>Automated systems maintain optimal drying temperatures for different types of produce, preventing over-drying.</p>
              </div>

              <div className="card p-6">
                <div className="text-yellow-500 text-4xl mb-4">
                  <i className="fas fa-wind"></i>
                </div>
                <h4 className="text-xl font-bold mb-3">Advanced Airflow Design</h4>
                <p>Engineered airflow patterns ensure even drying across all trays, eliminating hot spots and cold zones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technology;
