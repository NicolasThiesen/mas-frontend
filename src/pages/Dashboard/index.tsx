import { ActivyTable, Header,Summary } from '../../components';
import { Container } from './style';

export const Dashboard = () => {
    return (
        <>  
            <Header/>
            <Container>
                <Summary />
                <ActivyTable/>
            </Container>
        </> 
    )
}
