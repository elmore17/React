import React from 'react';
import surprise from "../../icon/surprise.png"
import {Row,Col,Container} from 'react-bootstrap';
import "../stats/style.css"


const Stats = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='blocks'>
                        <p id='hi'>Welcome, Tim Lead</p>
                        <img id='surprise' src={surprise} />
                        <p id='balance'>Your balance: 555000$</p>
                    </div>
                </Col>
                <Col>
                    <div className='blockss'>
                        <p id='hi'>Welcome, Tim Lead</p>
                        <img id='surprise' src={surprise} />
                        <p id='balance'>Your balance: 555000$</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Stats;