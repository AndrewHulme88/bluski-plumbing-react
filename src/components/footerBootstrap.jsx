import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FooterBootstrap() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-light'>

      <section className='d-flex justify-content-center justify-content-lg-between p-1 mt-0 border-top'>
        <MDBContainer className='text-center text-md-start mt-1'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-3'>
                <MDBIcon icon="gem" className="me-3" />
                BLUSKI PLUMBING
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-3'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Parkdale VIC 3193, Australia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                bluskiplumbing@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 0422313727
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className='d-flex justify-content-center justify-content-lg-between p-3 border-top'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>
    </MDBFooter>
  );
}
