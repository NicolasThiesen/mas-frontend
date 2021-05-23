import {Container, Content} from './style'

const Header = ({name}:any) => {
    return (
        <Container>
            <Content>
                <h1>My Activies Space</h1>
                <div>
                    <button type="button">Nova Unidade Curricular</button>
                    <button type="button">Nova Atividade</button>
                </div>
            </Content>
        </Container>    
    )
}

export default Header;