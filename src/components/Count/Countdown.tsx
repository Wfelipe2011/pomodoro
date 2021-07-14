import { useContext } from 'react';
import styles from './Countdown.module.css'
import { CountdownContext } from '../../contexts/CountdownContext';

import '../../styles/global.css'
import { Content } from '../../contexts/Content';

export const Countdown = () => {
    const { isThemeDark } = useContext(Content)
    const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); // se não estiver dois caracter ele adiciona '0' no inicio;
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split(''); // ex: minuto 5 ele adiciona 05;
    if (isThemeDark) {
        document.querySelector('body')?.classList.add('darkBody')
    } else {
        document.querySelector('body')?.classList.remove('darkBody')
    }


    return (
        <div className={`${hasFinished && 'none'}`}>
            <div className={`${styles.countdownContainer}`}>
                <div>
                    <span className={`${isThemeDark && 'darkSpan'} `}>{minuteLeft}</span>
                    <span className={`${isThemeDark && 'darkSpan'} `}>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span className={`${isThemeDark ? 'darkSpan' : ''} `}>{secondsLeft}</span>
                    <span className={`${isThemeDark ? 'darkSpan' : ''} `}>{secondsRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button disabled className={`${styles.countdownButton}`}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button type="button" onClick={resetCountdown} className={`${isThemeDark ? 'darkButton' : ''} ${styles.countdownButton} ${styles.countdownButtonActive}`}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button type="button" onClick={startCountdown} className={`${isThemeDark ? 'darkButton' : ''} ${styles.countdownButton}`}>
                            Iniciar um ciclo
                        </button>

                    )}

                </>
            )}




        </div>
    );
}

