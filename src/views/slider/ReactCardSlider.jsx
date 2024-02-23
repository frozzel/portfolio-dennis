import React from 'react';
import './Slider.css';
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaHubspot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { SlOrganization } from "react-icons/sl";
import { FaRobot } from "react-icons/fa6";










import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
} from "reactstrap";

const ReactCardSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  }

  return (
    <div id="main-slider-container" >
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {
          props.slides.map((slide, index) => {
            return (
              <Col md="4" key={index} onClick={() => slide.clickEvent()}>
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href={slide.website}  target='_blank'  rel="noreferrer" >
                      {/* <img
                        alt="..."
                        src={slide.image}
                      /> */}
                      {/* <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div> */}
                      {slide.image === "GiBrain"
                      ? <FaRobot  className="btn-avi "/>
                      : slide.image === "FaCcMastercard"
                      ? <FaMoneyCheckDollar  className="btn-avi"/>
                      : slide.image === "RiInstagramFill"
                      ? <FaUserFriends  className="btn-avi"/>
                      : slide.image === "FaHubspot"
                      ? <FaHubspot  className="btn-avi"/>
                      : slide.image === "FaShoppingCart"
                      ? <FaShoppingCart  className="btn-avi"/>
                      : slide.image === "SlOrganization"
                      ? <SlOrganization  className="btn-avi"/>
                      : <MdChevronLeft  className="btn-avi"/>
                      
                    }
                    </a>
                  </div>
                  <CardBody>
                    <a href={slide.website} >
                      <div className="author">
                        <CardTitle tag="h4">{slide.title}</CardTitle>
                        {/* <h6 className="card-category">{slide.category}</h6> */}
                      </div>
                    </a>
                    <p className="card-description text-center text-wrap cd1">
                      {slide.description}
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral btn-new"
                      color="link"
                      href={slide.github}
                        target="_blank"
                    >
                        <FaGithub />
                    </Button>
                    {/* <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button> */}
                    <Button
                      className="btn-just-icon btn-neutral  btn-new ml-1"
                      color="link"
                      href={slide.website}
                      target="_blank"
                    >
                        <FiExternalLink />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            )
          })
        }
      </div>
      <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
    </div>
  )
}
export default ReactCardSlider;
