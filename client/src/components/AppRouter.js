import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import { Context } from '..';
import Shop from '../pages/Shop';
import { authRoutes, publicRoutes} from '../routes';

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} exact/>
            )}
            {publicRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} exact/>
            )}
            <Route path="*" element={<Shop/>} />
        </Routes>
    );
};

export default AppRouter;