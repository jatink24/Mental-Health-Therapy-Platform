import React, { useState } from 'react';

const SlotBooking = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const slots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle slot booking (e.g., API call)
    console.log(`Slot: ${selectedSlot}, Date: ${date}, Time: ${time}`);
    alert(`Slot Booked: ${selectedSlot} on ${date}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Book a Slot
        </h2>
        
        <form onSubmit={handleSubmit}>
          {/* Date Picker */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* Time Picker */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="time">
              Select Time
            </label>
            <input
              type="time"
              id="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          {/* Slot Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Available Slots
            </label>
            <div className="grid grid-cols-2 gap-4">
              {slots.map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  className={`px-4 py-2 border rounded-md text-center transition ${
                    selectedSlot === slot
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
                  }`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default SlotBooking;
