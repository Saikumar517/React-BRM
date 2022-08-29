import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./SIgnup.css"

const SignUp = () => {
    return (
        <Container>
            <Row className="signup-container" >
                <Col className="d-flex flex-column justify-content-evenly" >
                    <div className="text-center" >
                        <h4>Please Signup here..!</h4>
                    </div>
                    <div className='d-flex flex-column justify-content-around align-content-center align-items-around' >
                        <input type="text" placeholder='Firstname' />
                        <input type="text" placeholder='Lastname' />
                        <input type="number" placeholder='Phone number' />
                        <input type="email" placeholder='E-mail' />
                        <Button className='btn btn-dark' > SIGN UP </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp; 