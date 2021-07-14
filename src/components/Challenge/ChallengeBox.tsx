import { useContext, useCallback } from 'react';
import styles from './ChallengeBox.module.css'
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import { Count } from '../Count/Count';
import { Content } from '../../contexts/Content';


export function ChallengeBox() {
    const { isThemeDark } = useContext(Content)

    const { activeChallenge, resetChallenge, comĺeteChallenge } = useContext(ChallengesContext)
    const { resetCountdown, isCount, setIsCount } = useContext(CountdownContext)

    const handleChallengeSucceeded = useCallback(() => {
        comĺeteChallenge();
        resetCountdown();
        setIsCount(false);
    }, [])

    const handleChallengeFailed = useCallback(() => {
        resetChallenge();
        resetCountdown();
        setIsCount(false);
    }, [])

    return (
        <div className={`${isThemeDark && 'darkChallenge'} ${styles.challengeBoxContainer}`}>
            {activeChallenge ?
                (
                    <div className={styles.challengeActive}>
                        <header>Ganhe {activeChallenge.amount} xp</header>

                        <main>
                            <img src={`/icons/exercise-${activeChallenge.type}.png`} />
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                        <footer>
                            <button type="button" onClick={handleChallengeFailed} className={styles.challengeButton}>
                                Pular
                            </button>
                            {isCount ? (
                                <button type="button" onClick={handleChallengeSucceeded} className={`${styles.challengeButton} ${styles.challengeButtonSuccess}`}>
                                    Completo
                                </button>
                            ) : (
                                <button className={`${styles.challengeButton} ${styles.challengeButtonSuccess}`}>
                                    <Count time={5} />
                                </button>

                            )}

                        </footer>
                    </div>
                ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="/icons/level-up.png" alt="Level Up" />
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div >
    );
}

// {isActive && (
//     <button type="button" onClick={cancelExercise} className={styles.challengeButton}>
//         Iniciando em...
//     </button> 

// )}

// {isActive ? (
//     <Countdown time={0.1} isActive={true} ActiveChallenge={ActiveChallenge} />
// ) : (
//     
// )
// }