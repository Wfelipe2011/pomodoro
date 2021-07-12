import { useContext } from "react"
import { Content } from "../contexts/Content"
import React from 'react';
import Switch from '@material-ui/core/Switch';

export function Nav() {
    const { isThemeDark, setIsThemeDark } = useContext(Content)

    if (isThemeDark) {
        document.querySelector('html')?.classList.add('dark')
    } else {
        document.querySelector('html')?.classList.remove('dark')
    }
    function handleChange() {
        setIsThemeDark(!isThemeDark)
    }
    return (
        <nav className="navContanier">
            <p>ThemeDark</p><Switch
                checked={isThemeDark}
                onChange={handleChange}
                color="primary"
                name="isThemeDark"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </nav>
    );
}