import { useState, useEffect, useRef, useCallback } from 'react';

export const formatTime = (totalSeconds: number): { hours: string, minutes: string, seconds: string } => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
};

export const useTimer = (initialSeconds: number = 0, onTimerEnd: () => void = () => {}) => {
  const [totalSeconds, setTotalSeconds] = useState(initialSeconds);
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const stopTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  }, []);
  
  useEffect(() => {
    if (isRunning && remainingSeconds <= 0) {
      stopTimer();
      onTimerEnd();
    }
  }, [remainingSeconds, isRunning, stopTimer, onTimerEnd]);


  const start = useCallback(() => {
    if (isRunning || remainingSeconds <= 0) return;

    setIsRunning(true);
    endTimeRef.current = Date.now() + remainingSeconds * 1000;

    intervalRef.current = window.setInterval(() => {
      const newRemaining = Math.round((endTimeRef.current! - Date.now()) / 1000);
      if (newRemaining >= 0) {
        setRemainingSeconds(newRemaining);
      } else {
        setRemainingSeconds(0);
        stopTimer();
        onTimerEnd();
      }
    }, 250);
  }, [isRunning, remainingSeconds, stopTimer, onTimerEnd]);

  const pause = useCallback(() => {
    if (!isRunning) return;
    stopTimer();
  }, [isRunning, stopTimer]);
  
  const reset = useCallback((newSeconds?: number) => {
    stopTimer();
    const secondsToSet = newSeconds !== undefined ? newSeconds : totalSeconds;
    if (newSeconds !== undefined) {
      setTotalSeconds(secondsToSet);
    }
    setRemainingSeconds(secondsToSet);
  }, [stopTimer, totalSeconds]);

  const setTime = useCallback((seconds: number) => {
     setTotalSeconds(seconds);
     setRemainingSeconds(seconds);
     if(isRunning) {
         stopTimer();
     }
  }, [isRunning, stopTimer]);

  return {
    remainingSeconds,
    isRunning,
    start,
    pause,
    reset,
    setTime,
  };
};