import React, { useState, useEffect } from 'react';
import SlotBooking from '../Components/SlotBooking';

const Dashboard = () => {
  // Mock data for user details
  const [user, setUser] = useState({});
  
  // Mock data for appointments
  const [appointments, setAppointments] = useState([]);

  // Simulate fetching user data and appointments from an API
  useEffect(() => {
    const fetchUserData = () => {
      // Mock user details
      const mockUser = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1234567890',
      };

      // Mock appointments data
      const mockAppointments = [
        {
          id: 1,
          date: '2024-10-01',
          time: '10:00 AM',
          doctor: 'Dr. Smith',
          location: 'Health Clinic, Room 5',
        },
        {
          id: 2,
          date: '2024-10-05',
          time: '2:00 PM',
          doctor: 'Dr. Johnson',
          location: 'Wellness Center, Room 2',
        },
        {
          id: 3,
          date: '2024-10-10',
          time: '11:30 AM',
          doctor: 'Dr. Martinez',
          location: 'Care Hospital, Room 7',
        },
      ];

      // Set mock data into state
      setUser(mockUser);
      setAppointments(mockAppointments);
    };

    fetchUserData();
  }, []);

  return (
    <><div className="min-h-screen bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
              {/* User Details Section */}
              <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-600">User Details</h2>
                  <div className="mt-4 space-y-2">
                      <p><strong>Name:</strong> {user.name}</p>
                      <p><strong>Email:</strong> {user.email}</p>
                      <p><strong>Phone:</strong> {user.phone}</p>
                  </div>
              </div>

              <a href="/slot-booking" className='bg-gradient-to-r from-blue-700 to-blue-800 py-2 px-3 rounded-md mx-auto  text-white'>
                        Book A Slot
              </a>

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
                                      Appointment with {appointment.doctor}
                                  </h3>
                                  <p className="text-gray-600">
                                      <strong>Date:</strong> {appointment.date}
                                  </p>
                                  <p className="text-gray-600">
                                      <strong>Time:</strong> {appointment.time}
                                  </p>
                                  <p className="text-gray-600">
                                      <strong>Location:</strong> {appointment.location}
                                  </p>
                              </div>
                          ))}
                      </div>
                  )}
              </div>
          </div>
      </div>
    </>
  );
};

export default Dashboard;
