import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const urlGitHub = "https://avatars.githubusercontent.com/u/60045911?v=4";
    const userName = "Wfelipe2011";

    return (
        <div className={styles.profileContainer}>
            <img src={urlGitHub} alt={userName} />
            <div>
                <strong>{userName}</strong>

                <p>
                    <img src="icons/level.png" alt="Level Up" />
                    Level 1
                </p>
            </div>
        </div>
    );
}