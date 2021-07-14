import React from 'react';
import { render } from "@testing-library/react";
import { Countdown } from './Countdown';

describe('Countdonw component test', () => {
    test('Componente deve ser renderizado', () => {
        const countdown = render(<Countdown />)

        expect(countdown).toMatchSnapshot();
    })
})