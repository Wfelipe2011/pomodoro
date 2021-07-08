import style from '../styles/components/ExperienceBar.module.css'


export function ExperienceBar() {
    return (
        <header className={style.experienceBarContainer}>
            <span>0 xp</span>
            <div>
                <div className={style.experienceBarProgress} style={{ width: '50%' }} />
                <span className={style.currentExperience} style={{ left: '50%' }}>300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}