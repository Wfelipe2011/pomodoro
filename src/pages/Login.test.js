import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Login } from "./Login";

describe('Login component', () => {
    test('deve iniciar', () => {
        render(<Login />)

        const titulo = screen.queryByText('Bem Vindo ao Modoro Moveit!')

        expect(titulo).toBeInTheDocument()
    })
})