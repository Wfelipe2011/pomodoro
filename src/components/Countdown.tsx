import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/components/Countdown.module.css'


export function Countdown() {
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);

    const minutes = Math.floor(time / 60) // Arrendondar para baixo
    const seconds = time % 60; //mod resto da divisão

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); // se não estiver dois caracter ele adiciona '0' no inicio;
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split(''); // ex: minuto 5 ele adiciona 05;

    function startCountdown() {
        setIsActive(true);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>
            <button type="button" onClick={startCountdown} className={styles.countdownButton}>
                Iniciar um ciclo
            </button>
        </div>
    );
}