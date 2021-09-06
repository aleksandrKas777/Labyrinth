import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {Statistic} from './statistic/Statistic';




export const ModalContent:React.FunctionComponent = () =>{
    const {modalActive} = useSelector((state: RootState) => state);
    let content;
    if (modalActive === 'statistic') {
        content = <Statistic />
    } else if (modalActive === 'settings'){
        content = 'settings'
    } else {
        content = ''
    }


    return (<div>{content}</div>)
}