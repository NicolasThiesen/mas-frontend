import { Link } from 'react-router-dom';
import {Container, Content, FormContainer, InputContainer, Error} from './style';
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import { Button } from '../../components';
import { Background } from '../Login/style';
import { useForm } from 'react-hook-form'

interface FormData {
    name: string;
    email: string;
    password: string
}

export const Register = () => {
    const { register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

    return (
        <Container>
            <Content>
                <FormContainer>
                    <h2>Cadastro</h2>
                    <form onSubmit={onSubmit}>
                        <InputContainer>
                            <FiUser size={40}/>
                                <input type="text" placeholder="Usuário" {...register("name", {required:true})} />
                        </InputContainer>
                        {errors.name && <Error>O campo usuário é obrigatório</Error>}
                        <InputContainer>
                            <FiMail size={40}></FiMail>
                                <input type="email" placeholder="E-mail" {...register("email", {required:true})}/>
                        </InputContainer>
                        {errors.email && <Error>O campo email é obrigatório</Error>}
                        <InputContainer>
                            <FiLock size={40}> </FiLock>
                                <input type="password" placeholder="Senha" {...register("password", {required:true})}/>
                        </InputContainer>
                        {errors.password && <Error>O campo senha é obrigatório</Error>}
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
