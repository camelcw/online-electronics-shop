import React, { useState } from 'react';
import {Button, Container} from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button onClick={() => setTypeVisible(true)} className='mt-2'>Добавить тип</Button>
            <Button onClick={() => setDeviceVisible(true)} className='mt-2'>Добавить устройство</Button>
            <Button onClick={() => setBrandVisible(true)} className='mt-2'>Добавить бренд</Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
        </Container>
    );
};

export default Admin;