import {GoFile, GoNote, GoGraph} from 'react-icons/go'
import {Container} from './style'


const Summary = ({name}:any) => {
    return (
        <Container>
            <div>
                <header>
                    <p>Unidades Curriculares</p>
                    <GoGraph size={40}/>
                </header>
                <strong>
                    25
                </strong>
            </div>
            <div>
                <header>
                    <p>Atividades</p>
                    <GoNote size={40} />
                </header>
                <strong>
                    80
                </strong>
            </div>
            <div className="highlight-background">
                 <header>
                    <p>Unidades Curriculares</p>
                    <GoFile size={40} />
                </header>
                <strong>
                    9.1
                </strong>
            </div>
        </Container>
    )
}

export default Summary;