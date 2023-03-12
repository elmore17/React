import React from 'react';
import "../blocks/style.css"
import bell from "../../icon/bell.svg"
import man from "../../icon/man.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Blocks = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <div className='block'>
                        <label>
                            <input id="search" type="text" placeholder="Search"/>
                        </label>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className='date'>new date</div>
                </Col>
                <Col>
                    <div className='notification'><img src={bell} /></div>
                </Col>
                <Col>
                    <div className='avatar'><img id='man' src={man} /></div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Blocks;