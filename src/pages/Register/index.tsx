import { Link } from 'react-router-dom';
import {Container, Content, FormContainer, InputContainer} from './style';
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import { Button } from '../../components';
import { Background } from '../Login/style';

export const Register = () => {
    return (
        <Container>
            <Content>
                <FormContainer>
                    <h2>Cadastro</h2>
                    <form action="">
                        <InputContainer>
                            <FiUser size={40}/>
                                <input type="text" placeholder="Usuário" />
                        </InputContainer>
                        <InputContainer>
                            <FiMail size={40}></FiMail>
                                <input type="email" placeholder="E-mail" />
                        </InputContainer>
                        <InputContainer>
                            <FiLock size={40}> </FiLock>
                                <input type="password" placeholder="Senha" />
                        </InputContainer>
                        <Button type="submit">Cadastrar</Button>
                    </form>
                    <Link to="/">
                        <FiArrowLeft size={40}></FiArrowLeft>
                        Logar
                    </Link>
                </FormContainer>
            </Content>
            <Background></Background>
        </Container>
    )
}
