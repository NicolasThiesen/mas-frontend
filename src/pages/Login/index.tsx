import {} from './style';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Header, Summary, Button, ActivyTable } from '../../components';
import {Container,Content, FormContainer, InputContainer, Background} from './style';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça o seu Login</h2>
                    <form action="">
                        <InputContainer>
                            <FiMail size={40}></FiMail>
                                <input type="email" placeholder="E-mail" />
                        </InputContainer>
                        <InputContainer>
                            <FiLock size={40}> </FiLock>
                                <input type="password" placeholder="Senha" />
                        </InputContainer>
                        <Button type="submit">Logar</Button>
                    </form>
                    <Link to="/register">
                        <FiLogIn size={40}></FiLogIn>
                        Cadastrar
                    </Link>
                </FormContainer>
            </Content>
            <Background/>
        </Container>
    )
}
