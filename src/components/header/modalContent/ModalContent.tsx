import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';




export const ModalContent:React.FunctionComponent = () =>{
    const {modalActive} = useSelector((state: RootState) => state);
    let content:string;
    if (modalActive === 'statistic') {
        content = 'statistic'
    } else if (modalActive === 'settings'){
        content = 'settings'
    } else {
        content = ''
    }


    return (<div>{content}</div>)
}