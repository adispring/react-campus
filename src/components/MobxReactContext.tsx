import React from 'react';
import { observer } from 'mobx-react-lite';
import { createContext, useContext } from 'react';
import { Timer } from './MobxReact';

export const TimerContext = createContext<Timer>({} as Timer);

const TimerViewUseContext = observer(() => {
  const timer = useContext(TimerContext);
  return <span>Seconds passed: {timer.secondsPassed}</span>;
});

export default TimerViewUseContext;
