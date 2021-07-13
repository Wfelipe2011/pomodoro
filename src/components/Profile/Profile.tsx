import { useContext, useState } from 'react';
import styles from './Profile.module.css'
import { ChallengesContext } from '../../contexts/ChallengesContext';

import '../../styles/global.css'
import { Content } from '../../contexts/Content';
import { useParams } from 'react-router-dom';

interface UserGit {
    login: string;
    avatar_url: string;
    bio: string;
    name: string;
}

export const Profile = () => {
    const { isThemeDark } = useContext(Content)
    const { id }: any = useParams();
    const [user, setUser] = useState({} as UserGit)

    fetch(`https://api.github.com/users/${id}`).then((body) => {
        return body.json()
    }).then(dados => {
        setUser(dados)
    })

    const userName = id;
    localStorage.setItem('user', userName)

    const { level } = useContext(ChallengesContext)

    return (

        <div className={`${styles.profileContainer}`}>
            <img
                src={user.avatar_url ? user.avatar_url : '/icons/level-up.png'}
                alt={user.login ? user.login : 'UserName'} />
            <div>
                <strong className={`${isThemeDark && 'darkStrong'}`}>{user.name ? user.name : localStorage.getItem('user')}</strong>
                <p>
                    <img src="/icons/level.png" alt="Level Up" />
                    Level {level}
                </p>
            </div>
        </div>

    );
}

