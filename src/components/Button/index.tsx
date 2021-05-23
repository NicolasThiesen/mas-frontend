import { ButtonHTMLAttributes } from 'react';
import {Container} from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = ({children, ... rest}:ButtonProps) => {
    return (
        <Container type="button" {... rest}>
            {children}
        </Container>
    )
}

export default Button;