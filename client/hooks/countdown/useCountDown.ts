import { useEffect, useState } from "react";

interface UseCountDownProps {
  initialTime?: number;
  onComplete?: () => void;
}

const useCountDown = ({ initialTime = 10, onComplete }: UseCountDownProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime * 60);

  useEffect(() => {
    if (initialTime > 0) {
      setTimeLeft(initialTime * 60);
    }
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes} : ${seconds.toString().padStart(2, "0")}`;

  return {
    formattedTime,
    timeLeft,
  };
};

export default useCountDown;
