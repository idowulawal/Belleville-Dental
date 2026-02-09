import React, { useState, useEffect } from 'react';

const Ticker = () => {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState('Detecting location...');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`);
        },
        () => {
          setLocation('Location access denied');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }

    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const formattedTime = time.toLocaleTimeString('en-US', { 
    hour12: true, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-sky-900 text-sky-100 py-2 text-xs font-medium z-50 border-t border-sky-800">
      <div className="ticker-wrapper">
        <div className="ticker-content flex space-x-24 items-center">
          <div className="flex items-center space-x-2">
            <i className="far fa-calendar-alt text-sky-400"></i>
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="far fa-clock text-sky-400"></i>
            <span>{formattedTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-map-marker-alt text-sky-400"></i>
            <span>Current Location: {location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-bullhorn text-sky-400"></i>
            <span className="uppercase tracking-widest">Notice: New 2024 Research Papers are now available in the Library.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
