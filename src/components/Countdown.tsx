import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60) // Arrendondar para baixo
    const seconds = time % 60; //mod resto da divisão

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); // se não estiver dois caracter ele adiciona '0' no inicio;
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split(''); // ex: minuto 5 ele adiciona 05;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false);
        setTime(0.1 * 60)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
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
            {hasFinished ? (
                <button disabled className={`${styles.countdownButton}`}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button type="button" onClick={resetCountdown} className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button type="button" onClick={startCountdown} className={styles.countdownButton}>
                            Iniciar um ciclo
                        </button>
                    )}

                </>
            )}




        </div>
    );
}