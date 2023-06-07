import React from 'react';
import { observer } from 'mobx-react-lite';
import { Timer } from '../stores/Timer';

export const myTimer = new Timer();

const TimerView = observer(({ timer }: { timer: Timer }) => (
  <span>Seconds passed: {timer.secondsPassed}</span>
));

export default TimerView;
