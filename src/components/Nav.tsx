export function Nav(props: any) {
    const themeColor = props.theme
    const theme = props.teste
    function color() {
        let cor = themeColor()
        console.log(theme)
    }
    return (
        <nav>
            <button type="button" onClick={color}>Teste</button>
        </nav>
    );
}