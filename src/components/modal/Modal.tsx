import React from 'react';
import './modal.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {setModalActiveDispatcher} from '../../redux/dispatchers/dispatcher';
import {ModalContent} from '../header/modalContent/ModalContent';


export const ModalWindow: React.FunctionComponent = () => {
    const {modalActive} = useSelector((state: RootState) => state);

    return (
        <div className={modalActive === '' ? 'modal' : 'modal activeModal'} onClick={() => {
            setModalActiveDispatcher('')
        }}>
            <div className="modal_content" onClick={e => e.stopPropagation()}> <ModalContent/>
            </div>
        </div>
    )
};
