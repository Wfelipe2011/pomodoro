import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';

import '../styles/global.css'
import { Content } from '../contexts/Content';

export function Profile() {
    const { isThemeDark } = useContext(Content)
    const urlGitHub = "https://avatars.githubusercontent.com/u/60045911?v=4";
    const userName = "Wfelipe2011";

    const { level } = useContext(ChallengesContext)

    return (
        <div className={`${styles.profileContainer}`}>
            <img src={urlGitHub} alt={userName} />
            <div>
                <strong className={`${isThemeDark && 'darkStrong'}`}>{userName}</strong>

                <p>
                    <img src="/icons/level.png" alt="Level Up" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}