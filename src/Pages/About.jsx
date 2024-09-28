import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Learn more about our mission, values, and the people behind MiHealth, your personalized mental health platform.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-blue-600">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
              At MiHealth, we strive to provide personalized and accessible mental health care to individuals across the globe. We believe everyone deserves to have a support system that empowers them to overcome their challenges and build a better future.
            </p>
          </div>

          {/* Example Content: Mission Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Compassionate Care</h3>
              <p className="text-gray-600">
                We provide a supportive and empathetic environment where everyone can feel safe sharing their thoughts and feelings.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Evidence-Based Therapy</h3>
              <p className="text-gray-600">
                Our platform offers scientifically-backed therapies to ensure effective mental health treatments tailored to your needs.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Personalized Approach</h3>
              <p className="text-gray-600">
                We understand that each individual is unique, and we provide customized therapy plans that align with your specific goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-blue-600">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
              Our team of experienced therapists, counselors, and mental health professionals are here to support you every step of the way.
            </p>
          </div>

          {/* Example Content: Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <img src="https://via.placeholder.com/150" alt="John Doe" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">John Doe</h3>
              <p className="text-gray-600">Chief Therapist</p>
              <p className="text-gray-500 mt-2">John has over 15 years of experience helping individuals overcome anxiety and depression through personalized care.</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <img src="https://via.placeholder.com/150" alt="Jane Smith" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">Jane Smith</h3>
              <p className="text-gray-600">Senior Counselor</p>
              <p className="text-gray-500 mt-2">Jane specializes in cognitive-behavioral therapy and works with clients to manage stress and improve mental well-being.</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <img src="https://via.placeholder.com/150" alt="David Brown" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">David Brown</h3>
              <p className="text-gray-600">Psychologist</p>
              <p className="text-gray-500 mt-2">David is a clinical psychologist who focuses on helping individuals develop resilience and positive coping strategies.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
