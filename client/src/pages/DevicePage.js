import React from 'react';
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap';
import Iphone13_64 from '../img/Iphone13_64.jpg'

const  DevicePage = () => {
    const device ={id:1, name:'Iphone 13 64gb', state: 'New', img: Iphone13_64, price: '70000'}
    return (
        <Container className='mt-3'>
            <Row className='d-flex justify-content-between align-items-center'>
            <Col md={4}>
                <Image width={300} height={300} src={device.img} />
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{device.name}</h2>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                    className='d-flex flex-column justify-content-center align-items-around'
                >
                    <h3>{device.price}</h3>
                    <Button>Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {}
            </Row>
        </Container>
    );
};

export default DevicePage;