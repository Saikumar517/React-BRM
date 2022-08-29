import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Header from '../Header/Header'

const BenchList = () => {

    const empData = ["EmpId", "Name", "Email", "TotalWorkExp", "Chat", "Worklogs", "Reseverd Bench", "Actions"]

    return (
        <>
            <Header />
            <Container>
                <Row className='mt-3' >
                    <Col className="col-md-8" >
                        <h2> Bench List </h2>
                    </Col>
                    <Col>
                        <Button>New Bench Employe</Button>
                    </Col>
                </Row>
                <Row className="mt-3" >
                    <Col className="col-md-8" >
                        <input type="text" placeholder='Search...' className='w-50' />
                    </Col>
                    <Col>
                        <select name="Exp in Years" id="exp" className='text-center btn btn-dark' >
                            <option value="Emp Experience">Emp Experience</option>
                            <option value="1-2">1-2</option>
                            <option value="2-3">2-3</option>
                            <option value="3-4">3-4</option>
                            <option value="4-5">4-5</option>
                            <option value="5-6">5-6</option>
                            <option value="6-7">6-7</option>
                            <option value="7-8">7-8</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-between' >
                        { empData.map(eachOne => {
                            return (
                                <div key={eachOne} >
                                    <p> { eachOne } </p>
                                </div>
                            )
                        }) }
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h1> Hello </h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BenchList