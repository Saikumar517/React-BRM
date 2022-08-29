import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaRocket } from 'react-icons/fa'
import "./Bench.css"

const Bench = () => {

  const data = [
    {
      id : 1,
      POCName : "POC Name",
      Duration : "1month",
      CratedBy: "Team Lead"
    },
    {
      id : 2,
      POCName : "POC Name",
      Duration : "1month",
      CratedBy: "Team Lead"
    },
    {
      id : 3,
      POCName : "POC Name",
      Duration : "1month",
      CratedBy: "Team Lead"
    },
    {
      id : 4,
      POCName : "POC Name",
      Duration : "1month",
      CratedBy: "Team Lead"
    }
  ]

  const topHeadings = ["Id", "Name"," Date", "POC"]

  return (
    <Container className="poc" >
      {/* <Row>
        <Col>
          <Button> POC </Button>
        </Col>
      </Row> */}
      <Row className="d-flex justify-content-between align-items-center align-content-center" >
        <Col className="col-md-4 shadow w-25 rounded" >
          <div className="d-flex justify-content-between align-items-center align-content-center p-3" >
            <div>
              <h4>3</h4>
              <p>Inactive</p>
            </div>
            <FaRocket size={'2em'} />
          </div>
        </Col>
        <Col className="col-md-4 w-25 shadow rounded" >
          <div className="d-flex justify-content-between align-items-center align-content-center p-3" >
            <div>
              <h4>4</h4>
              <p>Hold</p>
            </div>
            <FaRocket size={'2em'} />
          </div>
        </Col>
        <Col className="col-md-4 w-25 shadow rounded" >
          <div className="d-flex justify-content-between align-items-center align-content-center p-3" >
            <div>
              <h4>5</h4>
              <p>Completed</p>
            </div>
            <FaRocket size={'2em'} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='col-12' >
        <h4> Leave </h4>
        </Col>
      </Row>
      <Row>
      <Col className="col-md-8 rounded poc-card" >
          <div className="d-flex justify-content-around align-items-center align-content-center top-heading-container">
            {topHeadings.map(eachOne=> {
              return(
                <div className='mt-3' >
                  <p> { eachOne } </p>
                </div>
              )
            })}
          </div>
        <div>
          {data.map(eachOne => {
            return (
              <div key={eachOne.id} className="d-flex justify-content-around mt-2 ">
                <p> { eachOne.id } </p>
                <p> { eachOne.POCName } </p>
                <p> {eachOne.Duration} </p>
                <p> { eachOne.CratedBy } </p>
              </div>
            )
          })}
        </div>
        </Col>
        <Col className='d-flex jutsify-content-center align-items-center align-content-center' >
          <div className="d-flex flex-column justify-content-around align-items-center align-content-center m-auto" >
            <h4 className="mb-5 text-danger" >Active  0</h4>
            <h4 className="mb-5 text-primary" > Inactive 0</h4>
            <h4 className="mb-5 text-success" >Project 0</h4>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Bench;