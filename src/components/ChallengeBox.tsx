import { useEffect } from 'react';
import styles from '../styles/components/ChallengeBox.module.css'
import { Countdown } from './Countdown'

export function ChallengeBox() {

    const hasActiveChallenge = true;
    let isActive = false;

    function cancelExercise() {
        console.log('pular ...')
    }

    function startCountdownExercise() {
        setTimeout(() => {
            isActive = true
        })
    }

    function ActiveChallenge() {
        console.log('finalizou')
    }

    useEffect(() => {
        setTimeout(() => {
            isActive = true
        }, 5000)
    }, [])

    useEffect(() => {
        if (hasActiveChallenge) {

        }

    }, [hasActiveChallenge])

    return (
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ?
                (
                    <div className={styles.challengeActive}>
                        <header>Ganhe 400 xp</header>

                        <main>
                            <img src="icons/exercise-2.png" />
                            <strong>Novo desafio</strong>
                            <p>Levante e faça uma caminhada</p>
                        </main>
                        <footer>
                            {isActive && (
                                <button type="button" onClick={cancelExercise} className={styles.challengeButton}>
                                    Iniciando em...
                                </button> 
                                
                            )}

                            {isActive ? (
                                <Countdown time={0.1} isActive={true} ActiveChallenge={ActiveChallenge} />
                            ) : (
                                <button type="button" onClick={cancelExercise} className={styles.challengeButton}>
                                    Pular exercicio
                                </button>
                            )
                            }


                        </footer>
                    </div>
                ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finaliza um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.png" alt="Level Up" />
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div >
    );
}