import { useEffect, useState } from "react"

const useCountDown = ({ initialTime = 10 }: { initialTime?: number }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime * 60)

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000);

        return () => clearInterval(timer)
    }, [timeLeft])

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60

    const formattedTime = `${minutes} : ${seconds.toString().padStart(2, "0")}`

    return {
        timeLeft,
        formattedTime,
        setTimeLeft,
    };
}

export default useCountDown