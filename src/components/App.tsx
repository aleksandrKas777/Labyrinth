import React from 'react';
import {Playground} from './playground/Playground';
import './index.scss';
import {Header} from './header/Header';
import {Track} from './track/Track';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import {ModalWindow} from './modal/Modal';

export const App: React.FunctionComponent = () => {

    return (
        <Provider store={store}>
            <div className='wrapper'>
                <Header/>
                <Playground/>
                <Track/>
            </div>
            <ModalWindow/>
        </Provider>
    );
}

