import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { Container, Error } from './styles';
import { FiX } from 'react-icons/fi';
interface NewCourseUnitProps {
    isOpen: boolean;
    onRequestClose: ()=> void;
}

interface NewCourseUnitData {
    name: string;
    description: string
}


export const NewCourseUnitModal = ({isOpen, onRequestClose}:NewCourseUnitProps) => {
    const { register, handleSubmit, formState: {errors}} = useForm<NewCourseUnitData>()

    const onSubmit = handleSubmit( data => alert(JSON.stringify(data)))
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <Container>
                <Container>
                    <h2>Cadastrar Unidade Curricular</h2>
                    <button type="button" onClick={onRequestClose} className="react-modal-close"><FiX></FiX></button>
                    <form onSubmit={onSubmit}>
                        <input type="text" placeholder={"Nome"} {...register("name", {required:true})} />
                        {errors.name && <Error></Error>}
                        <input type="text" placeholder={"Descrição"} {...register("description", {required: true})} />
                        {errors.description && <Error></Error>}
                        <button type="submit">Cadastrar</button>
                    </form>
                </Container>
            </Container>
        </Modal>
    )
}
