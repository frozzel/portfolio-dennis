import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap';
import { SiGoogleads, SiGoogleanalytics} from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';



export default function Google() {
  return (
    <div className="section text-center section-dark bg-info d-flex align-items-center justify-content-center">
          <Container >
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title font-weight-normal">Google Certified</h2>
                <h5 className="description font-weight-normal font-size-sm">For a web developer, understanding Google Ads, Analytics, and AI-powered ads is crucial in today's digital landscape. This comprehensive understanding empowers web developers to create websites that not only deliver a seamless user experience but also integrate seamlessly with digital marketing strategies, ultimately driving traffic and conversions.</h5>
                <br />
                <Button
                  className="btn-round"
                  color="neutral"
                  href="https://skillshop.exceedlms.com/profiles/a8fa8522096840549f2aa0beac72bc60"
                  target="_blank"
                >
                  Certifications
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row className='d-flex align-items-center justify-content-center'>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-neutral">
                    {/* <i className="nc-icon nc-album-2" /> */}
                    <SiGoogleads />

                  </div>
                  <div className="description">
                    <h4 className="info-title font-weight-normal">Google Ads</h4>
                    <p className="description font-weight-normal"> a powerful advertising platform widely used for online marketing, and a web developer with knowledge of its intricacies can optimize website structures to enhance ad performance.</p>
                    {/* <Button className="btn-link" color="info" target="_blank" href="https://drive.google.com/file/d/14iEdCLl1n18f0Ru25xx2yaR0aq9a3HxS/view?usp=sharing">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-neutral">
                    {/* <i className="nc-icon nc-bulb-63" /> */}
                    <SiGoogleanalytics />
                  </div>
                  <div className="description">
                    <h4 className="info-title font-weight-normal">Google Analytics</h4>
                    <p className='description font-weight-normal'>
                    Google Analytics provides valuable insights into user behavior, helping developers make informed decisions about content and design based on user engagement data. 
                    </p>
                    {/* <Button className="btn-link" color="info" target="_blank" href="https://drive.google.com/file/d/1CP9By-ne-0wNJV5oPaMWgpZTmYzfDXlg/view?usp=sharing">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-neutral">
                    {/* <i className="nc-icon nc-chart-bar-32" /> */}
                    <GiBrain />


                  </div>
                  <div className="description">
                    <h4 className="info-title font-weight-normal">AI-Powered Performance Ads</h4>
                    <p className='description font-weight-normal'>
                    allows developers to leverage machine learning algorithms for targeted advertising, maximizing the effectiveness of ad campaigns. 
                    </p>
                    {/* <Button className="btn-link" target="_blank" color="info" href="https://www.salesforce.com/trailblazer/dhickox1">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
  )
}
