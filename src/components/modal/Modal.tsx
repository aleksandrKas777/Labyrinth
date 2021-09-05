import React, {useEffect} from 'react';
import './modal.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {modalActiveDispatcher, statisticGameDispatcher} from '../../redux/dispatchers/dispatcher';
import {ModalContent} from '../header/modalContent/ModalContent';


export const ModalWindow: React.FunctionComponent = () => {
    const {modalActive, statisticGame} = useSelector((state: RootState) => state);


    useEffect(()=> {
        const statistic = JSON.parse(localStorage.getItem('labyrinth') as string) || [];
        statisticGameDispatcher(statistic);
    }, [])


    useEffect(()=> {
        localStorage.setItem('labyrinth', JSON.stringify(statisticGame))
    }, [statisticGame]);



    return (
        <div className={modalActive === '' ? 'modal' : 'modal activeModal'} onClick={() => {
            modalActiveDispatcher('')
        }}>
            <div className="modal_content" onClick={e => e.stopPropagation()}> <ModalContent/>
            </div>
        </div>
    )
};
