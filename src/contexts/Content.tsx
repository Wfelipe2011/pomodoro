import { createContext, useState } from "react";

interface ContentModel {
    isThemeDark: boolean
    setIsThemeDark: any
    isGitHub: boolean
    setIsGitHub: any
    user: string
    setUser: any
    timeMinutes: number
    setTimeMinutes: any
    stopMinutes: number
    setStopMinutes: any
    userGit: UserGit
    setUserGit:any
}

interface UserGit {
    login: string;
    avatar_url: string;
    bio: string;
    name: string;
}

export const Content = createContext({} as ContentModel)

export function ContentProvider({ children }: any) {
    const [isThemeDark, setIsThemeDark] = useState(false)
    const [isGitHub, setIsGitHub] = useState(false)
    const [user, setUser] = useState('')
    const [timeMinutes, setTimeMinutes] = useState(25)
    const [stopMinutes, setStopMinutes] = useState(5)
    const [userGit, setUserGit] = useState({} as UserGit)

    return (
        <Content.Provider
            value={{
                isThemeDark,
                setIsThemeDark,
                setIsGitHub,
                isGitHub,
                user,
                setUser,
                timeMinutes,
                setTimeMinutes,
                stopMinutes,
                setStopMinutes,
                userGit,
                setUserGit
            }}>
            {children}
        </Content.Provider>
    )
}