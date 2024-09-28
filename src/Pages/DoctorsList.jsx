import React, { useState } from 'react';

const DoctorsList = () => {
  // Mock data for doctors
  const [doctors] = useState([
    {
      id: 1,
      name: 'Dr. Smith',
      specialization: 'Cardiologist',
      location: 'Health Clinic, Room 5',
      experience: '15 years',
      email: 'dr.smith@example.com',
      phone: '+1234567890',
    },
    {
      id: 2,
      name: 'Dr. Johnson',
      specialization: 'Neurologist',
      location: 'Wellness Center, Room 2',
      experience: '10 years',
      email: 'dr.johnson@example.com',
      phone: '+0987654321',
    },
    {
      id: 3,
      name: 'Dr. Martinez',
      specialization: 'Dermatologist',
      location: 'Care Hospital, Room 7',
      experience: '8 years',
      email: 'dr.martinez@example.com',
      phone: '+1122334455',
    },
  ]);

  // State for managing lightbox visibility and the selected doctor
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Function to open the lightbox with doctor details
  const openLightbox = (doctor) => {
    setSelectedDoctor(doctor);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">List of Doctors</h2>

        {/* Doctors List */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="p-4 border border-gray-300 rounded-lg bg-blue-50 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-gray-600">
                <strong>Specialization:</strong> {doctor.specialization}
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> {doctor.location}
              </p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={() => openLightbox(doctor)}
              >
                More Details
              </button>
            </div>
          ))}
        </div>

        {/* Lightbox for Doctor Details */}
        {selectedDoctor && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
              <h2 className="text-2xl font-bold mb-4">{selectedDoctor.name}</h2>
              <p className="text-gray-700">
                <strong>Specialization:</strong> {selectedDoctor.specialization}
              </p>
              <p className="text-gray-700">
                <strong>Experience:</strong> {selectedDoctor.experience}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {selectedDoctor.email}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {selectedDoctor.phone}
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> {selectedDoctor.location}
              </p>
              <button
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                onClick={closeLightbox}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
