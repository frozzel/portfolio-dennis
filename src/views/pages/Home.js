/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useRef} from "react"; 
import { FaHubspot } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaSalesforce } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import emailjs from '@emailjs/browser'
import Google from "components/Google";
// import WorkPortfolio from "views/slider/CardSlider";
import ReactCardSlider from "views/slider/ReactCardSlider";


// reactstrap components
import {
  Button,
  // Card,
  // CardBody,
  // CardFooter,
  // CardTitle,
  // Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexHeader from "components/Headers/IndexHeader.js";

function Home() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });


  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_3eenbrk', 'template_xlft98q', form.current, 'E0jgsTm4JA0E0F_0v')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(true)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  const sliderClick = (slider)=>{
    console.log("clicked slider")
  }
  const slides = [
    {image: "GiBrain",
    title:"Artificial Intelligence",
    description:"Introducing my cutting-edge web development project that seamlessly integrates A-Frame.io, a powerful framework for building immersive virtual reality experiences, with the advanced capabilities of ChatGPT and the Web Speech API.",
    github:"https://github.com/frozzel/meta-verse",
    website:"https://sea-turtle-app-z2bd9.ondigitalocean.app/",
    clickEvent:sliderClick
    },
    {image:"FaCcMastercard",
    title:"Stripe Payments",
    description:"This development incorporates a diverse range of integrations, including but not limited to: Stripe, Cloudinary, Emailjs, and Brevo (an email client and CRM solution). UpWork Client site with a focus on user experience and user interface design.",
    github:"https://github.com/frozzel/dollar4scholar-client",
    website:"https://dollar4scholar.com/",
    clickEvent:sliderClick
  },
  {image:"RiInstagramFill",
  title:"Social Network Socket.io",
  description:"This application uses an assortment of integrations including: Socket.io, Gem Turbo, Devise (User Auth), active storage with AWS S3, bootstrap, Saas, Postgresql and Drag & Drop Filepond. The app is deployed over Heroku with an AWS S3 bucket for picture sharing.",
  github:"https://github.com/frozzel/narcissistSocial",
  website:"https://narcissist-social.herokuapp.com/users/sign_in",
  clickEvent:sliderClick
  },
  {image:"FaHubspot",
  title:"Hubspot Integration",
  description:"HubSpot API integrations enhance business processes by connecting the CRM platform with other tools. For instance, syncing HubSpot with email marketing software automates lead information, enabling seamless communication. Integrating with sales tools provides real-time updates on leads and deals, streamlining sales strategies.",
  github:"https://github.com/frozzel/Dennis-Hickox-iwh-i-practicum",
  website:"https://github.com/frozzel/Dennis-Hickox-iwh-i-practicum",
  clickEvent:sliderClick
},
{image:"FaShoppingCart",
title:"E-Commerce Store",
description:"A MERN e-commerce app enables online buying and selling. It uses MongoDB for data, Express.js for server logic, React for the front end, and Node.js as the runtime. Users can browse products, add to the cart, and checkout, with features like authentication and secure payments for a smooth shopping experience.",
github:"https://github.com/frozzel/LUX",
website:"https://indulge.herokuapp.com/",
clickEvent:sliderClick
},
{image:"SlOrganization",
title:"Productivity App",
description:"This productivity app facilitates seamless team collaboration with a user-friendly interface. It includes a drag-and-drop to-do list feature for easy task management. Team members can collaborate efficiently, share updates, and organize tasks effortlessly, enhancing overall productivity and coordination.",
github:"https://github.com/frozzel/Tikkitt",
website:"https://tikkitt.herokuapp.com/",
clickEvent:sliderClick
},
  ]

  return (
    <>
      <ExamplesNavbar />
      <IndexHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let me introduce myself</h2>
                <h5 className="description">Enthusiastic Full Stack Web Developer and Junior Salesforce Administrator with a passion for enhancing both Salesforce platform management and web development. Experienced in customizing Salesforce products and skilled in front-end/back-end web development. Seeking a key role in a dynamic, entrepreneurial environment focused on product and service growth.</h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="https://drive.google.com/file/d/1YyrChx5cNsEU2BaJ-8cKI-3unEiTck9o/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    {/* <i className="nc-icon nc-album-2" /> */}
                    <GrCertificate />

                  </div>
                  <div className="description">
                    <h4 className="info-title">Web Developer</h4>
                    <p className="description">Proudly certified in web development from Georgia Institute of Technology</p>
                    <Button className="btn-link" color="info" target="_blank" href="https://drive.google.com/file/d/14iEdCLl1n18f0Ru25xx2yaR0aq9a3HxS/view?usp=sharing">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    {/* <i className="nc-icon nc-bulb-63" /> */}
                    <FaHubspot />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Hubspot</h4>
                    <p>
                      Certified in Hubspot Marketing Software, Integration &  development 
                    </p>
                    <Button className="btn-link" color="info" target="_blank" href="https://drive.google.com/file/d/1CP9By-ne-0wNJV5oPaMWgpZTmYzfDXlg/view?usp=sharing">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    {/* <i className="nc-icon nc-chart-bar-32" /> */}
                    <FaSalesforce />

                  </div>
                  <div className="description">
                    <h4 className="info-title">Salesforce</h4>
                    <p>
                      Salesforce Certified Administrator & Non Profit Cloud Consultant for your CRM needs
                    </p>
                    <Button className="btn-link" target="_blank" color="info" href="https://www.salesforce.com/trailblazer/dhickox1">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    {/* <i className="nc-icon nc-sun-fog-29" /> */}
                    <FaAws />

                  </div>
                  <div className="description">
                    <h4 className="info-title">Amazon Web Services</h4>
                    <p>
                      Trained to use AWS for cloud computing, storage, EC2, S3, RDS, and Digital Ocean
                    </p>
                    <Button className="btn-link" color="info" target="_blank" href="https://drive.google.com/file/d/16C4W1JKZaQ8BjkpKEfPHg7OHhT0XdXzy/view?usp=sharing">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Google />
        <div className="section section-dark text-center"  
        style={{
          backgroundImage:"url(" + require("assets/img/bg.jpg") + ")", backgroundPosition: "bottom"}}
        >
          <Container>
            <h2 className="title">Work Portfolio</h2>
           
                    <ReactCardSlider slides={slides}/>
                    {/* <WorkPortfolio /> */}

          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" name="name" required/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" name="email" required/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <label>Phone</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-mobile" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Phone" type="text" name="phone" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Subject</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-send" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Subject" type="text" name="subject" required/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    name="message" required
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="secondary" size="lg" type="submit" value="SEND">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default Home;

