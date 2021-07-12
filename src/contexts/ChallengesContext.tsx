import { createContext, useState, ReactNode, useEffect } from "react";

import challenges from '../challenges.json';
import challengeXP2 from '../challengeXP2.json';

interface ChallengesProviderProps {
    children: ReactNode
}

interface ActiveChallenge {
    type: number;
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    levelUp: () => void;
    comĺeteChallenge: () => void;
    activeChallenge: ActiveChallenge;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const userData = {
        level: Number(localStorage.getItem('level')),
        currentExperience: Number(localStorage.getItem('currentExperience')),
        challengesCompleted: Number(localStorage.getItem('challengesCompleted'))
    }
    const [level, setLevel] = useState(userData.level || 1);
    const [currentExperience, setCurrentExperience] = useState(userData.currentExperience || 0);
    const [challengesCompleted, setChallengesCompleted] = useState(userData.challengesCompleted || 0)

    const [activeChallenge, setActiveChallenge] = useState<any>(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {

        localStorage.setItem('level', String(level));
        localStorage.setItem('currentExperience', String(currentExperience))
        localStorage.setItem('challengesCompleted', String(challengesCompleted))

    }, [level, currentExperience, challengesCompleted])

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        if (Number(localStorage.getItem('ciclo')) === 3) {
            setChallenge(challengeXP2)
        } else {
            setChallenge(challenges)
        }
    }

    function setChallenge(challengeType: any) {
        const randonChallengeIndex = Math.floor(Math.random() * challengeType.length);
        const challenge = challengeType[randonChallengeIndex];
        setActiveChallenge(challenge)
        new Audio('/notification.mp3').play();
        if (Notification.permission === 'granted') {
            new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function comĺeteChallenge() {
        if (!activeChallenge) {
            return;
        }

        let { amount } = activeChallenge

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1)
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                levelUp,
                currentExperience,
                challengesCompleted,
                startNewChallenge,
                experienceToNextLevel,
                resetChallenge,
                comĺeteChallenge,
                activeChallenge
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}