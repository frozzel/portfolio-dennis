import React from 'react'
import './Slider.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaHubspot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { SlOrganization } from "react-icons/sl";
import { FaRobot } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";



export default function CardSlider() {
  return (
    <div className="section text-center section-dark bg-transparent d-flex align-items-center justify-content-center ">
          <Container >
            <Row>
              <Col className="ml-auto mr-auto " md="8">
                <h2 className="title font-weight-normal ">Work Portfolio</h2>
                
              </Col>
            </Row>

            <Row className='d-flex align-items-center justify-content-center mb-5'>
              <Col md="3">
                <div className="info ">
                  <div className="icon icon-neutral">
                    {/* <i className="nc-icon nc-album-2" /> */}
                    <FaRobot className='icon-new'/>

                  </div>
                  <div className="description">
                    <h4 className="info-title font-weight-normal mb-3">Artificial Intelligence</h4>
                    <p className="description font-weight-normal text-left">Introducing my cutting-edge web development project that seamlessly integrates A-Frame.io, a powerful framework for building immersive virtual reality experiences, with the advanced capabilities of ChatGPT and the Web Speech API.</p>
                    <Button
                      className="btn-just-icon btn-neutral btn-new"
                      color="link"
                      href="https://github.com/frozzel/meta-verse"
                        target="_blank"
                    >
                        <FaGithub />
                    </Button>
              
                    <Button
                      className="btn-just-icon btn-neutral  btn-new ml-1"
                      color="link"
                      href="https://sea-turtle-app-z2bd9.ondigitalocean.app/"
                      target="_blank"
                    >
                        <FiExternalLink />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info ">
                  <div className="icon icon-neutral">
                    {/* <i className="nc-icon nc-bulb-63" /> */}
                    <FaMoneyCheckDollar />
                  </div>
                  <div className="description">
                    <h4 className="info-title font-weight-normal mb-3">Stripe Payments</h4>
                    <p className='description font-weight-normal text-left'>
                    This development incorporates a diverse range of integrations, including but not limited to: Stripe, Cloudinary, Emailjs, and Brevo (an email client and CRM solution). UpWork Client site with a focus on user experience and user interface design.                    
                    </p>
                    <Button
                      className="btn-just-icon btn-neutral btn-new"
                      color="link"
                      href="https://github.com/frozzel/dollar4scholar-client"
                        target="_blank"
                    >
                        <FaGithub />
                    </Button>
              
                    <Button
                      className="btn-just-icon btn-neutral  btn-new ml-1"
                      color="link"
                      href="https://dollar4scholar.com/"
                      target="_blank"
                    >
                        <FiExternalLink />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-neutral">
                    {/* <i className="nc-icon nc-chart-bar-32" /> */}
                    <FaUserFriends />


                  </div>
                  <div className="description">
                    <h4 className="info-title font-weight-normal mb-3">Social Media Socket.io</h4>
                    <p className='description font-weight-normal text-left'>
                    Assortment of integrations including: Socket.io, Gem Turbo, Devise (User Auth), active storage with AWS S3, bootstrap, Saas, Postgresql and Drag & Drop Filepond. The app is deployed over Heroku with an AWS S3 bucket for picture sharing.
                    </p>
                    <Button
                      className="btn-just-icon btn-neutral btn-new"
                      color="link"
                      href="https://github.com/frozzel/narcissistSocial"
                        target="_blank"
                    >
                        <FaGithub />
                    </Button>
              
                    <Button
                      className="btn-just-icon btn-neutral  btn-new ml-1"
                      color="link"
                      href="https://narcissist-social.herokuapp.com/users/sign_in"
                      target="_blank"
                    >
                        <FiExternalLink />
                    </Button>
                  </div>
                </div>
              </Col>
              
            </Row>

            <Row className='d-flex align-items-center justify-content-center'>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-neutral">
                    {/* <i className="nc-icon nc-album-2" /> */}
                    <FaHubspot />

                  </div>
                  <div className="description">
                    <h4 className="info-title font-weight-normal mb-3">HubSpot Integrations</h4>
                    <p className="description font-weight-normal text-left">
                    HubSpot API integrations enhance business processes by connecting the CRM platform with other tools. Syncing HubSpot with email marketing software automates lead information, enabling seamless communication. Integrating with sales tools provides real-time updates on leads and deals.
                        </p>
                    <Button
                      className="btn-just-icon btn-neutral btn-new"
                      color="link"
                      href="https://github.com/frozzel/Dennis-Hickox-iwh-i-practicum"
                        target="_blank"
                    >
                        <FaGithub />
                    </Button>
              
                    <Button
                      className="btn-just-icon btn-neutral  btn-new ml-1"
                      color="link"
                      href="https://github.com/frozzel/Dennis-Hickox-iwh-i-practicum"
                      target="_blank"
                    >
                        <FiExternalLink />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-neutral">
                    {/* <i className="nc-icon nc-bulb-63" /> */}
                    <FaShoppingCart />
                  </div>
                  <div className="description">
                    <h4 className="info-title font-weight-normal mb-3">E-Commerce Store</h4>
                    <p className='description font-weight-normal text-left'>
                    E-commerce app enables online buying and selling. It uses MongoDB for data, Express.js for server logic, React for the front end, and Node.js as the runtime. Users can browse products, add to the cart, and checkout, with features like authentication and secure payments for a smooth shopping experience.
                    </p>
                    <Button
                      className="btn-just-icon btn-neutral btn-new"
                      color="link"
                      href="https://github.com/frozzel/LUX"
                        target="_blank"
                    >
                        <FaGithub />
                    </Button>
              
                    <Button
                      className="btn-just-icon btn-neutral  btn-new ml-1"
                      color="link"
                      href="https://indulge.herokuapp.com/"
                      target="_blank"
                    >
                        <FiExternalLink />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-neutral">
                    {/* <i className="nc-icon nc-chart-bar-32" /> */}
                    <SlOrganization />


                  </div>
                  <div className="description">
                    <h4 className="info-title font-weight-normal mb-3">Productivity App</h4>
                    <p className='description font-weight-normal text-left'>
                    This productivity app facilitates seamless team collaboration with a user-friendly interface. It includes a drag-and-drop to-do list feature for easy task management. Team members can collaborate efficiently, share updates, and organize tasks effortlessly, enhancing overall productivity and coordination.
                    </p>
                    <Button
                      className="btn-just-icon btn-neutral btn-new"
                      color="link"
                      href="https://github.com/frozzel/Tikkitt"
                        target="_blank"
                    >
                        <FaGithub />
                    </Button>
              
                    <Button
                      className="btn-just-icon btn-neutral  btn-new ml-1"
                      color="link"
                      href="https://tikkitt.herokuapp.com/"
                      target="_blank"
                    >
                        <FiExternalLink />
                    </Button>
                  </div>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
  )
}
