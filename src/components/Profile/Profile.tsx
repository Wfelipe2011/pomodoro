import { useContext, useState } from 'react';
import styles from './Profile.module.css'
import { ChallengesContext } from '../../contexts/ChallengesContext';

import '../../styles/global.css'
import { Content } from '../../contexts/Content';


export const Profile = () => {
    const { isThemeDark, userGit, user } = useContext(Content)

    const { level } = useContext(ChallengesContext)

    return (

        <div className={`${styles.profileContainer}`}>
            <img
                src={userGit.avatar_url ? userGit.avatar_url : '/icons/level-up.png'}
                alt={userGit.login ? userGit.login : user} />
            <div>
                <strong className={`${isThemeDark && 'darkStrong'}`}>{userGit.name ? userGit.name : user}</strong>
                {userGit.bio && (
                    <p>{userGit.bio}</p>
                )}
                <p>
                    <img src="/icons/level.png" alt="Level Up" />
                    Level {level}
                </p>
            </div>
        </div>

    );
}

