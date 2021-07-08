import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
    const urlGitHub = "https://avatars.githubusercontent.com/u/60045911?v=4";
    const userName = "Wfelipe2011";

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src={urlGitHub} alt={userName} />
            <div>
                <strong>{userName}</strong>

                <p>
                    <img src="icons/level.png" alt="Level Up" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}