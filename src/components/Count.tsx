import { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from '../styles/components/Countdown.module.css'

export function Count(props: any) {

    
    const [time, setTime] = useState(props.time * 60);
    const [isActive, setIsActive] = useState(false);
    const { setIsCount } = useContext(CountdownContext)

    const minutes = Math.floor(time / 60) // Arrendondar para baixo
    const seconds = time % 60; //mod resto da divisão

    function startCountdown() {
        setIsActive(true);
    }


    useEffect(() => {
        if (isActive && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setIsCount(true)
            setIsActive(false)
        }
    }, [isActive, time])

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); // se não estiver dois caracter ele adiciona '0' no inicio;
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split(''); // ex: minuto 5 ele adiciona 05;


    return (
        <a className={styles.count} onClick={startCountdown}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondsLeft}</span>
                <span>{secondsRight}</span>
            </div>
        </a>
    );
}