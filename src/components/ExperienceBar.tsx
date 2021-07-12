import { useContext } from 'react';
import style from '../styles/components/ExperienceBar.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Content } from '../contexts/Content';


export function ExperienceBar() {
    const { isThemeDark } = useContext(Content)
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={`${isThemeDark && style.experienceBarDark} ${style.experienceBarContainer}`}>
            <span>0 xp</span>
            <div>
                <div className={style.experienceBarProgress} style={{ width: `${percentToNextLevel}%` }} />
                <span className={style.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header >
    );
}