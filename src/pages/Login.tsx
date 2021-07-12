import { Button, Container, TextField } from "@material-ui/core";
import { useState } from 'react';
import { Link } from "react-router-dom";


export function Login() {
    const [user, setUser] = useState();

    function change(e:any) {
      setUser(e.target.value)
    }
    return (
        <Container maxWidth="sm">
            <form noValidate autoComplete="off" className="container form">
                <p>Bem Vindo ao Modoro Moveit!</p>
                <img src="/icons/icon.png" />
                <div className="input"><TextField id="user" onChange={change} label="UserName" /></div>
                <div className="button"><Link className="button" to={`/countDown/${user}`}>Iniciar</Link></div>
            </form>
        </Container >
    )
}