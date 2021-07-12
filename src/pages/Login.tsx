import { Button, Container, TextField } from "@material-ui/core";


export function Login() {
    const user = 'Wfelipe2011'
    function change() {
       
    }
    return (
        <Container maxWidth="sm">
            <form noValidate autoComplete="off" className="container form">
                <p>Bem Vindo ao Modoro Moveit!</p>
                <img src="/icons/icon.png" />
                <div className="input"><TextField id="user" label="UserName" /></div>
                <Button className="button" variant="contained" onClick={change} color="primary" href={`/countDown/${user}`} size='large'>Iniciar</Button>
            </form>
        </Container >
    )
}