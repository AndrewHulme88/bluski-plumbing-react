import React from 'react'
import { Container, Row, Col, Stack, Image, Nav, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function MyFooter() {
  return (
    <footer>
      <Container fluid>
        <Row className='bg-dark text-white p-4'>
          <Col className='mx-5'>
            <Stack>
              <Image src='src/assets/images/BluskiLogo.jpg'
              alt='Bluski Logo'
              width={150}
              height={100}
              />
            </Stack>

          </Col>
          <Col>
            Column 2
          </Col>
          <Col>
            <h3>Contact Us!</h3>
            <p><FontAwesomeIcon icon={faPhone} /> 0422313727</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter;
