import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Timer } from '../stores/Timer';

const TimerView = observer(() => {
  const [timer] = useState(() => new Timer());

  useEffect(() => {
    const interval = setInterval(() => {
      timer.increaseTimer();
    }, 1000);
    console.log('setInterval', interval);
    return () => {
      console.log('clearInterval', interval);
      clearInterval(interval);
    };
  }, [timer]);
  return <span>Seconds passed: {timer.secondsPassed}</span>;
});

export default TimerView;
