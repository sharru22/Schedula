import React, { useState } from "react";
import { AiOutlineUser, AiOutlineArrowLeft } from "react-icons/ai";

export default function AddToCalendar() {
  const doctor = {
    name: "Dr. Shalini Raj",
    specialization: "Cardiologist - Dombivli",
    qualification: "MBBS, MD (Internal Medicine)",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  };

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const timeSlots = [
    "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
    "11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM"
  ];

  const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const handleConfirm = () => {
    if(selectedDate && selectedTime) {
      setConfirmation(`Appointment added successfully for ${selectedDate.toDateString()} at ${selectedTime}!`);
    } else {
      setConfirmation("Please select a date and time.");
    }
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    const today = new Date();
    if(prev.getFullYear() > today.getFullYear() || 
       (prev.getFullYear() === today.getFullYear() && prev.getMonth() >= today.getMonth())) {
      setCurrentMonth(prev);
    }
  };

  const generateCalendarDays = () => {
    const days = [];
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    for(let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10 m-1"></div>);
    }

    for(let i = 1; i <= totalDays; i++) {
      const current = new Date(year, month, i);
      const isPastDate =
        current < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isToday =
        today.getDate() === i &&
        today.getMonth() === month &&
        today.getFullYear() === year;

      const isSelected =
        selectedDate &&
        selectedDate.getDate() === i &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;

      let className = "w-10 h-10 m-1 rounded-full flex items-center justify-center border border-gray-300 text-gray-400 cursor-not-allowed shadow-md";
      if(!isPastDate) className = "w-10 h-10 m-1 rounded-full flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-blue-100 shadow-md";
      if(isToday) className = "w-10 h-10 m-1 rounded-full flex items-center justify-center border border-blue-400 bg-blue-200 text-gray-900 shadow-lg";
      if(isSelected) className = "w-10 h-10 m-1 rounded-full flex items-center justify-center border border-blue-500 bg-blue-500 text-white shadow-lg";

      days.push(
        <button
          key={i}
          className={className}
          disabled={isPastDate}
          onClick={() => setSelectedDate(current)}
        >
          {i}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-sm p-4 border-2 border-blue-500">
        <div className="bg-blue-500 flex items-center px-4 py-3 rounded-t-2xl shadow-md">
        <button className="text-white mr-2 text-xl">
        <AiOutlineArrowLeft />
         </button>
          <span className="font-bold text-white text-lg">ADD TO CALENDAR</span>
        </div>

        {/* Doctor Info */}
        <div className="bg-gray-50 p-4 rounded-xl mb-4 flex flex-col items-center shadow-lg">
          {doctor.image ? (
            <img src={doctor.image} alt="Doctor" className="w-20 h-20 rounded-full mb-2 shadow-lg"/>
          ) : (
            <AiOutlineUser className="w-20 h-20 text-gray-400 mb-2 shadow-lg"/>
          )}
          <h3 className="text-lg font-semibold text-gray-900 text-center">{doctor.name}</h3>
          <p className="text-gray-600 text-sm text-center">{doctor.specialization}</p>
          <p className="text-gray-500 text-sm text-center">{doctor.qualification}</p>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={prevMonth}
            className={`px-2 py-1 rounded-lg ${currentMonth <= new Date() ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-blue-100 text-blue-700 hover:bg-blue-200 shadow-lg"}`}
            disabled={currentMonth <= new Date()}
          >
            Prev
          </button>

          <span className="font-semibold text-gray-700 text-center w-full">
            {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
          </span>

          <button
            onClick={nextMonth}
            className="px-2 py-1 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 shadow-lg"
          >
            Next
          </button>
        </div>

        {/* Calendar */}
        <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 mb-1">
          {weekdays.map(day => (
            <div key={day} className="w-10 h-6 flex items-center justify-center">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 justify-center mb-4">{generateCalendarDays()}</div>

        {/* Time Slots */}
        <div className="mb-4 shadow-lg p-2 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-2 text-center">Select Time</h4>
          <div className="flex flex-wrap justify-center">
            {timeSlots.map(slot => (
              <button
                key={slot}
                className={`px-3 py-1 m-1 rounded-lg border text-sm ${selectedTime === slot ? "bg-blue-500 text-white border-blue-500 shadow-lg" : "border-gray-300 text-gray-700 hover:bg-blue-100"}`}
                onClick={() => setSelectedTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Confirmation */}
        <button
          onClick={handleConfirm}
          className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition shadow-2xl"
        >
          View My Appointment
        </button>

        {confirmation && (
          <p className="mt-4 text-center text-sm text-blue-600 font-medium">{confirmation}</p>
        )}
      </div>
    </div>
  );
}
