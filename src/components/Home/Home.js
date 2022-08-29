import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Poc from "../POC/Poc";
import Bench from '../Bench/Bench';
import Header from '../Header/Header'
import "./Home.css"
const Home = () => {

const [show, setShow] = useState(true);
    const poc = () => {
        setShow(true)
    };
    const bench = () => {
        setShow(false);
    };

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col className="d-flex justify-content-around mt-3" >
                    <Button onClick={poc} >POC</Button>
                    <Button onClick={bench} >Bench</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    { show ?  <Poc/> : <Bench/> }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home