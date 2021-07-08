import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import styles from '../styles/components/Countdown.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import '../styles/global.css'


interface Countdown {
    time: number;
    isActive: boolean;
    ActiveChallenge?: () => void;
}

export function Countdown(props: Countdown) {

    const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); // se não estiver dois caracter ele adiciona '0' no inicio;
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split(''); // ex: minuto 5 ele adiciona 05;



    return (
        <div className={`${hasFinished ? 'none' : ''}`}>
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