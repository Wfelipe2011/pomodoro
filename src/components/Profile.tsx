import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';

import '../styles/global.css'
import { Content } from '../contexts/Content';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export const Profile = () => {
    const { isThemeDark } = useContext(Content)
    const { id }: any = useParams();

    const userName = id == 'undefined' ? 'UserName' : id;
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

