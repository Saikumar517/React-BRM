import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Login.css"



const Login = () => {
    return (
        <Container className="main-container" >
            <Row className="mini-container w-75 shadow-lg rounded" >
                <Col className=" d-flex flex-column justify-content-center" >
                    <div className='d-flex flex-column justify-content-around' >
                        <h1 className="text-center" > FISSION LABS </h1>
                        <div className='d-flex flex-column justify-content-center align-content-center align-items-center' >
                            <p>Please login to continue..!</p>
                            <input className='w-75 text-center mb-3' placeholder='Username' type="text" />
                            <input className='w-75 mt-2 text-center' placeholder='Password' type="password" />
                        </div>
                        <div className="text-center mt-3" >
                        <Button className='w-75 rounded btn btn-dark border border-0 text-center mb-2'> SIGNIN </Button>
                        <Button className='w-75 rounded btn btn-dark border border-0 text-center' > SIGNIN WITH GOOGLE </Button>
                        </div>
                        <div className='text-end mt-4' >
                            <Link to="/SignUp">Crate an account</Link>
                        </div>
                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center back-color rounded" >
                    <h4 className='w-75' > We are more than just a company </h4>
                    <p className='w-75 mt-4' >We harness innovation and engineering excellence to create symphony between business processes and underlying technologies.</p>
                </Col>
            </Row>
        </Container>
    )
}



export default Login