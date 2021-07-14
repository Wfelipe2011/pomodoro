import { Container, Switch, TextField } from "@material-ui/core";
import { useContext, useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import { Content } from "../contexts/Content";

export function Login() {
    const { isGitHub, setIsGitHub, user, setUser, userGit, setUserGit, setTimeMinutes, setStopMinutes } = useContext(Content)

    localStorage.setItem('ciclo', '1')

    const handleChange = useCallback((e: any) => {
        if (e.target.id == 'user') {
            setUser(e.target.value)
            if (isGitHub && e.target.value > 2) {
                setTimeout(() => {
                    fetch(`https://api.github.com/users/${user}`)
                        .then((body) => {
                            return body.json()
                        }).then(dados => {
                            console.log({ dados })
                            setUserGit(dados)
                        })
                }, 300)
            }
        }
        if (e.target.id == 'minutes') {
            setTimeMinutes(e.target.value)
        }
        if (e.target.id == 'stopMinutes') {
            setStopMinutes(e.target.value)
        }

    }, [])

    const handleChangeIsGitHub = useCallback(() => {
        setIsGitHub(!isGitHub)
        setTimeout(() => {
            fetch(`https://api.github.com/users/${user}`)
                .then((body) => {
                    return body.json()
                }).then(dados => {
                    setUserGit(dados)
                })
        }, 300)
    }, [])

    return (
        <Container maxWidth="sm">
            <form noValidate autoComplete="off" className="container form">
                <p>Bem Vindo ao Modoro Moveit!</p>
                <img src={isGitHub ? userGit.avatar_url ? userGit.avatar_url : "/icons/icon.png" : "/icons/icon.png"} className={`${isGitHub && userGit.avatar_url && 'imageRadius'}`} />
                <div className="inputContainer" >
                    <input className="input" required={true} name="user" type='text' id="user" onChange={handleChange} placeholder="UserName *" />
                    <input className="input" required={true} name="minutes" type='number' id="minutes" onChange={handleChange} placeholder="Cycle minutes " />
                    <input className="input" required={true} name="stopMinutes" type='number' id="stopMinutes" onChange={handleChange} placeholder="Stop Cycle minutes " />
                    <div className="gitHubContainer"><span>GitHub User?</span>
                        <Switch
                            id="isGitHub"
                            checked={isGitHub}
                            onChange={handleChangeIsGitHub}
                            color="primary"
                            name="isGitHub"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>

                    {user != null && user.length > 3 ? (
                        <div className="button"><Link to={'/countDown'} type="submit" className="button">Iniciar</Link></div>
                    ) : (
                        <div className="button"><a className="button buttonDisabled">Iniciar</a></div>
                    )}
                </div>
            </form>
        </Container >
    )
}

