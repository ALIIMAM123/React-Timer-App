import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [hour, setHour] = useState('');
  const [minutes, setMinutes] = useState('');
  const [second, setSeconds] = useState('');
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        const getDate = new Date();
        const getHour = getDate.getHours();
        const getMinute = getDate.getMinutes();
        const getSecond = getDate.getSeconds();

        setHour(getHour);
        setMinutes(getMinute);
        setSeconds(getSecond);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div className="main-container">
      <h1> Timer App </h1>
      <div className="timer-container">
        <div>{hour}</div>
        <div>{minutes}</div>
        <div>{second}</div>
      </div>
      <button className="timer-button" onClick={stopTimer}>
        {isRunning ? 'Stop Timer' : 'Start Timer'}
      </button>
    </div>
  );
}
