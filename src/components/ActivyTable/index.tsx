import {Container} from './style';

const ActivyTable = ({name}:any) => {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividades</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>Programação Web</td>
                            <td>Desenvolvimento do Frontend</td>
                            <td>8.5</td>
                            <td>05/04/2021</td>
                        </tr>
                        <tr>
                            <td>Programação Java</td>
                            <td>Desenvolvimento com Java</td>
                            <td>9.0</td>
                            <td>01/12/2021</td>
                        </tr>
                    </tbody>
                </thead>
            </table>
        </Container>
    )
}

export default ActivyTable;