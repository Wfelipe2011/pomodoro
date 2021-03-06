import { useCallback } from "react";
import { createContext, useState, ReactNode, useEffect, useContext } from "react";
import { ChallengesContext } from "./ChallengesContext";
import { Content } from "./Content";

interface CountdownProviderProps {
    children: ReactNode
}

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
    setIsCount: any,
    isCount: boolean
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;


export function CountdownProvider({ children }: CountdownProviderProps) {
    const { timeMinutes } = useContext(Content)
    const times = timeMinutes || 25
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(times * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const [isCount, setIsCount] = useState(false);

    const minutes = Math.floor(time / 60) // Arrendondar para baixo
    const seconds = time % 60; //mod resto da divisão

    const startCountdown = useCallback(() => {
        setIsActive(true);
    }, [])

    const resetCountdown = useCallback(() => {
        clearTimeout(countdownTimeout)
        setHasFinished(false)
        setIsActive(false);
        setTime(timeMinutes * 60)
    }, [])

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge();
        }
    }, [isActive, time])
    return (
        <CountdownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCountdown,
                setIsCount,
                isCount

            }}>
            {children}
        </CountdownContext.Provider>
    )
}