import React, { useState } from 'react'

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concerns: '',
    experience: ''
  })

  // Generate calendar days for current month
  const generateCalendar = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dateString = date.toISOString().split('T')[0]
      const isAvailable = day > now.getDate() // Only future dates available
      days.push({ day, dateString, isAvailable })
    }
    
    return days
  }

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', { selectedDate, selectedTime, ...formData })
    alert('Consultation booked successfully! We will contact you shortly.')
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  return (
    <div className="booking-page">
      <div className="booking-container">
        {/* Header */}
        <div className="booking-header">
          <h1 className="booking-title">
            <span className="ai-glow">AI-Powered</span> Consultation Booking
          </h1>
          <p className="booking-subtitle">
            Schedule your personalized digital security consultation with our AI-enhanced experts
          </p>
        </div>

        <div className="booking-content">
          {/* Calendar Section */}
          <div className="calendar-section">
            <h2 className="section-title">
              <span className="calendar-icon">📅</span>
              Select Date
            </h2>
            <div className="calendar-header">
              <h3>{monthNames[currentMonth]} {currentYear}</h3>
            </div>
            <div className="calendar-grid">
              <div className="weekday-header">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="weekday">{day}</div>
                ))}
              </div>
              <div className="days-grid">
                {generateCalendar().map((dayData, index) => (
                  <div
                    key={index}
                    className={`calendar-day ${
                      dayData?.isAvailable ? 'available' : 'unavailable'
                    } ${
                      selectedDate === dayData?.dateString ? 'selected' : ''
                    }`}
                    onClick={() => {
                      if (dayData?.isAvailable) {
                        setSelectedDate(dayData.dateString)
                      }
                    }}
                  >
                    {dayData?.day || ''}
                  </div>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="time-slots">
                <h3>Select Time</h3>
                <div className="time-grid">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Form Section */}
          <div className="form-section">
            <h2 className="section-title">
              <span className="form-icon">🛡️</span>
              Your Information
            </h2>
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="experience">Digital Security Experience</label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  required
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner - New to digital security</option>
                  <option value="intermediate">Intermediate - Some knowledge</option>
                  <option value="advanced">Advanced - Experienced user</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="concerns">Primary Security Concerns</label>
                <textarea
                  id="concerns"
                  value={formData.concerns}
                  onChange={(e) => handleInputChange('concerns', e.target.value)}
                  placeholder="Describe your main digital security concerns (scams, AI threats, privacy, etc.)"
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={!selectedDate || !selectedTime}
              >
                <span className="submit-text">Schedule AI-Enhanced Consultation</span>
                <span className="submit-glow"></span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .booking-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0e27 0%, #1a1d47 25%, #2d3561 50%, #0f172a 100%);
          position: relative;
          overflow: hidden;
        }

        .booking-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .booking-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 2;
        }

        .booking-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .booking-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: white;
          margin-bottom: 1rem;
          font-weight: 900;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        .ai-glow {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #10b981);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.3));
        }

        .booking-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .booking-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .calendar-section, .form-section {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .section-title {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
        }

        .calendar-header h3 {
          color: #3b82f6;
          font-size: 1.3rem;
          text-align: center;
          margin-bottom: 1rem;
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }

        .calendar-grid {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 15px;
          padding: 1rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .weekday-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .weekday {
          text-align: center;
          font-weight: 600;
          color: #3b82f6;
          padding: 0.5rem;
          font-size: 0.9rem;
        }

        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
        }

        .calendar-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          border: 2px solid transparent;
        }

        .calendar-day.available {
          background: rgba(59, 130, 246, 0.1);
          color: white;
          border-color: rgba(59, 130, 246, 0.3);
        }

        .calendar-day.available:hover {
          background: rgba(59, 130, 246, 0.3);
          border-color: #3b82f6;
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }

        .calendar-day.selected {
          background: linear-gradient(135deg, #3b82f6, #06b6d4) !important;
          border-color: #06b6d4;
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.7);
        }

        .calendar-day.unavailable {
          background: rgba(100, 100, 100, 0.1);
          color: rgba(255, 255, 255, 0.3);
          cursor: not-allowed;
        }

        .time-slots {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(59, 130, 246, 0.3);
        }

        .time-slots h3 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .time-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 0.8rem;
        }

        .time-slot {
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.3);
          color: white;
          padding: 0.8rem;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .time-slot:hover {
          background: rgba(59, 130, 246, 0.3);
          border-color: #3b82f6;
          transform: translateY(-2px);
        }

        .time-slot.selected {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          border-color: #06b6d4;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 10px;
          padding: 1rem;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.1);
        }

        .submit-button {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #10b981);
          border: none;
          border-radius: 15px;
          padding: 1.2rem 2rem;
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          margin-top: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .submit-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .submit-button:hover .submit-glow {
          left: 100%;
        }

        @media (max-width: 768px) {
          .booking-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .booking-container {
            padding: 1rem;
          }
          
          .time-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

export default BookingPage
