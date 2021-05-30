import {} from './style';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Header, Summary, Button, ActivyTable } from '../../components';
import {Container,Content, FormContainer, InputContainer, Background, Error} from './style';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface FormData {
    email: string;
    password: string
}


export const Login = () => {

    const { register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

    return (
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça o seu Login</h2>
                    <form onSubmit={onSubmit}>
                        <InputContainer>
                            <FiMail size={40}></FiMail>
                                <input type="email" placeholder="E-mail" {...register("email", {required:true})} />
                        </InputContainer>
                        {errors.email && <Error>O preenchimento do campo e-mail é obrigatório!</Error>}
                        <InputContainer>
                            <FiLock size={40}> </FiLock>
                                <input type="password" placeholder="Senha" {...register("password", {required: true})}/>
                        </InputContainer>
                        {errors.password && <Error>O preenchimento do campo senha é obrigatório!</Error>}
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
