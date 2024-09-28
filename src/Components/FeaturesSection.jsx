import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'One-to-One Interactive Sessions',
      description: 'Optimized code ensures your website loads quickly and performs smoothly.',
      icon: '🧑‍⚕️',
    },
    {
      title: 'Brain Fun Activity',
      description: 'Designed to work on all screen sizes, ensuring a great user experience everywhere.',
      icon: '🧠',
    },
    {
      title: 'Affordable & Easily Accesible',
      description: 'Easily customize the look and feel to match your brand.',
      icon: '🪙',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-t from-blue-100 to-blue-300">
      <div className="container mx-auto text-center">
        <h1 className="text-black-600 text-4xl">Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-blue-800 rounded-lg shadow-lg mt-5">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white mt-3">{feature.title}</h3>
              {/* <p className="text-gray-600">{feature.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
