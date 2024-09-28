import React, { useState, useEffect } from 'react';

const DoctorDashboard = () => {
  // Mock data for the doctor's personal details
  const [doctor, setDoctor] = useState({});

  // Mock data for doctor's appointments
  const [appointments, setAppointments] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchDoctorData = () => {
      // Mock doctor details
      const mockDoctor = {
        id: 1,
        name: 'Dr. Smith',
        specialization: 'Cardiologist',
        experience: '15 years',
        email: 'dr.smith@example.com',
        phone: '+1234567890',
        location: 'Health Clinic, Room 5',
      };

      // Mock appointments data
      const mockAppointments = [
        {
          id: 1,
          patientName: 'John Doe',
          date: '2024-10-01',
          time: '10:00 AM',
          issue: 'Chest pain',
        },
        {
          id: 2,
          patientName: 'Jane Doe',
          date: '2024-10-05',
          time: '2:00 PM',
          issue: 'High blood pressure',
        },
        {
          id: 3,
          patientName: 'Sam Smith',
          date: '2024-10-10',
          time: '11:30 AM',
          issue: 'Shortness of breath',
        },
      ];

      // Set mock data into state
      setDoctor(mockDoctor);
      setAppointments(mockAppointments);
    };

    fetchDoctorData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Doctor's Details Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600">Doctor's Details</h2>
          <div className="mt-4 space-y-2">
            <p><strong>Name:</strong> {doctor.name}</p>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Email:</strong> {doctor.email}</p>
            <p><strong>Phone:</strong> {doctor.phone}</p>
            <p><strong>Location:</strong> {doctor.location}</p>
          </div>
        </div>

        {/* Appointments Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Your Appointments</h2>

          {/* Show a message if there are no appointments */}
          {appointments.length === 0 ? (
            <p className="text-gray-600 text-lg">You have no upcoming appointments.</p>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="p-4 border border-gray-300 rounded-lg bg-blue-50 shadow-md"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    Appointment with {appointment.patientName}
                  </h3>
                  <p className="text-gray-600">
                    <strong>Date:</strong> {appointment.date}
                  </p>
                  <p className="text-gray-600">
                    <strong>Time:</strong> {appointment.time}
                  </p>
                  <p className="text-gray-600">
                    <strong>Issue:</strong> {appointment.issue}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
