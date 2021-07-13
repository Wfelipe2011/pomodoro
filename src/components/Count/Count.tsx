import { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";
import styles from './Countdown.module.css'

export function Count(props: any) {
    let times = props.time
    const ciclo = Number(localStorage.getItem('ciclo'))
    const { setIsCount } = useContext(CountdownContext)

    if (ciclo === 3) {
        times = props.time * 3
    } else if (ciclo > 3) {
        localStorage.setItem('ciclo', String(0));
    }

    const [time, setTime] = useState(times * 60);
    const [isActive, setIsActive] = useState(false);


    const minutes = Math.floor(time / 60)
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    useEffect(() => {

        if (isActive && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            new Audio('/notification.mp3').play();
            if (Notification.permission === 'granted') {
                new Notification('Desafio concluido!', {
                    body: `Clique no botão para resgatar sua recompensa!`
                })
            }
            localStorage.setItem('ciclo', String(ciclo + 1))
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