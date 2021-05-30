import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { Container, Error } from './style';
import { useForm } from 'react-hook-form';

interface NewActivyModalProps {
    isOpen: boolean;
    onRequestClose: ()=> void;
}


interface NewActivyData{
    curseunit: string,
    activy: string,
    date: Date
}

export const NewActivyModal = ({isOpen, onRequestClose}:NewActivyModalProps) => {
    const { register, handleSubmit, formState: {errors}} = useForm<NewActivyData>()

    const onSubmit = handleSubmit( data => alert(JSON.stringify(data)))
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <Container>
                <h2>Cadastrar Atividade</h2>
                <button type="button" onClick={onRequestClose} className="react-modal-close"><FiX size={20}/></button>
                <form onSubmit={onSubmit} >
                    <input type="text" placeholder="Unidade Curricular" {...register("curseunit", {required:true})} />
                    {errors.curseunit && <Error>O campo Unidade Curricular é obrigatório</Error>}
                    <input type="text" placeholder="Atividade" {...register("activy", {required:true})} />
                    {errors.activy && <Error>O campo Atividade é obrigatório</Error> }
                    <input type="date" placeholder="Data da atividade" {...register("date", {required:true})} />
                    {errors.date && <Error>O campo Data é obrigatório</Error> }
                    <button type="submit">Cadastrar</button>
                </form>
            </Container>
        </Modal>
    )
}
