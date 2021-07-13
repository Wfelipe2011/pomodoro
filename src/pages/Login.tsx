import { Container, TextField } from "@material-ui/core";
import { useState } from 'react';
import { Link } from "react-router-dom";


export function Login() {
    const [user, setUser]: any = useState(null);

    localStorage.setItem('ciclo', '1')
    function handleChange(e: any) {
        setUser(e.target.value)
    }
    return (
        <Container maxWidth="sm">
            <form noValidate autoComplete="off" className="container form" >
                <p>Bem Vindo ao Modoro Moveit!</p>
                <img src="/icons/icon.png" />
                <div className="input"><TextField required={true} id="user" onChange={handleChange} label="UserName" /></div>
                {user != null && user.length > 3 ? (
                    <div className="button"><Link to={`/countDown/${user}`} className="button">Iniciar</Link></div>
                ) : (
                    <div className="button"><a className="button buttonDisabled">Iniciar</a></div>
                )}

            </form>
        </Container >
    )
}

