import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }

  resetTimer() {
    this.secondsPassed = 0;
  }
}

export const myTimer = new Timer();

const TimerView = observer(({ timer }: { timer: Timer }) => (
  <span>Seconds passed: {timer.secondsPassed}</span>
));

export default TimerView;
