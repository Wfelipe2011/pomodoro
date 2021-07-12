import { createContext, useState } from "react";

interface ContentModel {
    isThemeDark: boolean
    setIsThemeDark: any
}

export const Content = createContext({} as ContentModel)

export function ContentProvider({ children }: any) {
    const [isThemeDark, setIsThemeDark] = useState(false)

    return (
        <Content.Provider
            value={{
                isThemeDark,
                setIsThemeDark
            }}>
            {children}
        </Content.Provider>
    )
}