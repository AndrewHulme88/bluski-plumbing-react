import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';

export default function FooterBootstrap() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-light'>
      <section className='d-flex justify-content-center justify-content-lg-between p-1 mt-0 border-top'>
        <MDBContainer className='text-center text-md-start mt-1'>
          <MDBRow className='mt-3'>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <p>
                <MDBIcon icon="home" className="me-3" />
                Parkdale VIC 3193, Australia
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                bluskiplumbing@gmail.com
              </p>
              </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
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
