import React from 'react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Timer } from '../stores/Timer';

const TimerView = observer(() => {
  const [timer] = useState(() => new Timer());
  return <span>Seconds passed: {timer.secondsPassed}</span>;
});

export default TimerView;
