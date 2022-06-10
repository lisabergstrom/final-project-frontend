import React, { useEffect, useState } from 'react';


const TimeTicker = () => {
  const [timeState, setTimeState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTimeState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Your local time is</h1>
      <h4>{timeState}</h4>
    </div>
  );
};

export default TimeTicker;