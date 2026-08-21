import { useEffect, useState } from "react";

interface UseCountDownProps {
  initialTime?: number;
  onComplete?: () => void;
}

const useCountDown = ({ initialTime = 0, onComplete }: UseCountDownProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime * 60);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (initialTime > 0) {
      setTimeLeft(initialTime * 60);
      setIsStarted(true);
    }
  }, [initialTime]);

  useEffect(() => {
    if (!isStarted || initialTime <= 0) return;

    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, initialTime, onComplete, isStarted]);

  const minutes = Math.floor(Math.max(0, timeLeft) / 60);
  const seconds = Math.max(0, timeLeft) % 60;

  const formattedTime = `${minutes} : ${seconds.toString().padStart(2, "0")}`;

  return {
    formattedTime,
    timeLeft,
  };
};

export default useCountDown;
