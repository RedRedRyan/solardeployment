import React from 'react';

const About = () => {
  return (
    <main>
      <section id="about" className="min-h-screen py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl md:text-6xl font-modern-negra mb-10 text-center">
            About Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="/images/crew.jpg"
                alt="Our Team" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-3xl font-serif mb-4 text-gradient">Our Mission</h3>
              <p className="mb-6 text-lg">
                At Solar Cabinet Dryer, we are committed to revolutionizing agricultural practices 
                through sustainable technology. Our mission is to reduce post-harvest losses, 
                improve food security, and empower farmers with affordable, eco-friendly solutions.
              </p>
              
              <h3 className="text-3xl font-serif mb-4 text-gradient">Our Story</h3>
              <p className="mb-6 text-lg">
                Founded in 2020, our company emerged from a research project aimed at addressing 
                the challenges faced by small-scale farmers in preserving their harvest. What began 
                as a prototype has evolved into a range of innovative solar drying solutions that 
                are now used across multiple countries.
              </p>
              
              <h3 className="text-3xl font-serif mb-4 text-gradient">Our Values</h3>
              <ul className="list-disc pl-5 mb-6 text-lg">
                <li className="mb-2">Sustainability - Harnessing renewable energy for a greener future</li>
                <li className="mb-2">Innovation - Continuously improving our technology</li>
                <li className="mb-2">Accessibility - Making technology available to all farmers</li>
                <li className="mb-2">Quality - Ensuring durability and effectiveness in all our products</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;