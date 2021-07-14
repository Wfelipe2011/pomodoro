import { useContext } from "react"
import { Content } from "../../contexts/Content"
import Switch from '@material-ui/core/Switch';
import style from './Nav.module.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { Link, Route } from "react-router-dom";

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
        <nav className={style.navContanier}>
            <Link className={style.link} to='/'>
                <HomeRoundedIcon className={style.home} />
            </Link>
            <div className={style.button}>
                <p>ThemeDark</p>
                <Switch
                    checked={isThemeDark}
                    onChange={handleChange}
                    color="primary"
                    name="isThemeDark"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
        </nav>
    );
}