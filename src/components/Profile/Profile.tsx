import { useContext } from 'react';
import styles from './Profile.module.css'
import { ChallengesContext } from '../../contexts/ChallengesContext';

import '../../styles/global.css'
import { Content } from '../../contexts/Content';
import { useParams } from 'react-router-dom';

export const Profile = () => {
    const { isThemeDark } = useContext(Content)
    const { id }: any = useParams();

    console.log(Boolean("https://avatars.githubusercontent.com/u/60045911?v=4"))

    const userName = id;
    localStorage.setItem('user', userName)
    
    const { level } = useContext(ChallengesContext)

    return (

        <div className={`${styles.profileContainer}`}>
            <img src='/icons/level-up.png' alt={userName} />
            <div>
                <strong className={`${isThemeDark && 'darkStrong'}`}>{localStorage.getItem('user')}</strong>
                <p>
                    <img src="/icons/level.png" alt="Level Up" />
                    Level {level}
                </p>
            </div>
        </div>

    );
}

