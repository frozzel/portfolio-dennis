import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import React from "react";
import Slider from "react-slick";
import Arwin from "../../assets/img/sites/Arwin.png";
import UniServer from "../../assets/img/sites/UniServer.gif";
import MetaVerse from "../../assets/img/sites/Meta-VerseGif.gif";
import THREE from "../../assets/img/sites/ReactThreeGif.gif";
import ReactNative from "../../assets/img/sites/ReactNativeDemo.png";
import CGIpro from "../../assets/img/sites/CGIPRO.png";
import Dollar4Scholar from "../../assets/img/sites/DollarScreen.png";
import WheelHouse from "../../assets/img/sites/WheelhouseStudios.png";
import Narcissist from "../../assets/img/sites/NarcissistSocial.png";
import Indulge from "../../assets/img/sites/Ingulge.gif";
import Tikkitt from "../../assets/img/sites/Tikkitt.png";
import ChatGpt from "../../assets/img/sites/chatgptbanner.webp";
import AuthNet from "../../assets/img/sites/authorize-net.jpg";

const slides = [
    {
        title: "Azure 3D Avatar and ChatGPT Integration",
        description: "This project is a full-stack application built using the MERN stack (MongoDB, Express.js, React, Node.js) to deliver a dynamic, engaging user interaction experience. It integrates Azure's 3D avatar technology for life-like animations, including synchronized voice output and eye movements, and leverages OpenAI's ChatGPT for intelligent conversational responses.",
        image: Arwin,
        github: "https://github.com/frozzel/TALKING_AVATAR-MAIN"
    },
    {
        title: "AI Auto Content Creation Server",
        description: "Welcome to our AI server, where the magic of ChatGPT meets the dynamic world of social media and customer relationship management! Imagine having a tireless content creator and social media manager who works around the clock, crafting engaging posts, insightful articles, and personalized messages—all tailored to your brand's unique voice. Our innovative solution integrates seamlessly with HubSpot, LinkedIn, Instagram, Facebook, and Twitter, making content creation and distribution a breeze.",
        image: UniServer,
        github: "https://github.com/frozzel/uni-server"
    },
    {
        title: "Meta-Verse ChatGpt Integration",
        description: "Immerse yourself in a world where virtual reality meets artificial intelligence, as we bring together A-Frame's versatility with the ability to interact and communicate using natural language processing. Navigate through captivating VR environments and engage in dynamic conversations with our integrated ChatGPT.",
        image: MetaVerse,
        github: "https://github.com/frozzel/meta-verse"
    },
    {
        title: "Three.js 3D Models and Animations",
        description: "This project presents an array of 3D animations 🚀 and interactive features rendered directly in the browser using WebGL, without the need for any additional plugins. 👽 Explore the creative possibilities with interactive 3D graphics, including spinning cubes, orbiting spheres, and more, all while navigating the interface with intuitive mouse controls. 🛸 This application offers a comprehensive introduction to setting up and utilizing Three.js in a React environment.",
        image: THREE,
        github: "https://github.com/frozzel/THREE-REACT"
    },
    {
        title: "React Native Expo: Mobile App Development",
        description: "This Expo project is a simple React Native application that demonstrates how to connect to an external API using Axios. The app is designed to fetch and display contact information from a HubSpot CRM, showcasing the basic functionality of an HTTP GET request in a mobile application environment. Additionally, it incorporates functionalities for accessing device contacts and current location tracking using Expo modules.",
        image: ReactNative,
        github: "https://github.com/frozzel/React-Native-Hello-Worl"
    },
    {
        title: "CGI Pro Painters",
        description: "Our client-side features include Google Analytics integration, which tracks and analyzes website traffic to provide insights into user behavior and improve our services. We also integrate HubSpot forms and CTAs to enhance lead generation and customer engagement, capturing leads effectively and managing customer relationships efficiently. On the server-side, we have a ChatGPT-powered auto content publisher that generates and posts content to our Twitter, Instagram, and Facebook accounts, ensuring a consistently updated and engaging social media presence.",
        image: CGIpro,
        github: "https://github.com/frozzel/cgi-pro-painters"
    },
    {
        title: "Dollar4schollar",
        description: "This Lottery is open for College and University student Country wide. With access to an edu administered email address you are qualified to win the weekly pot. The pot submissions will be sorted through and pulled weekly for a winner. Keep an eye out for your emails! You may have the luck of the draw. The Development utilizes a multitude of integrations including: Stripe, Cloudinary, Emailjs, Brevo (email client & CRM).",
        image: Dollar4Scholar,
        github: "https://github.com/frozzel/dollar4scholar-client"
    },    
    {
        title: "Wheel House Studios",
        description: "Welcome to the GitHub repository for Wheel House Studios, a premier wedding photography service dedicated to capturing your special moments with elegance and creativity. Our goal is to provide timeless, beautiful images that tell the story of your love and celebration. Wheel House Studios specializes in wedding photography, offering a range of services designed to fit your unique vision. This Development is based on a Create A React App with a HoneyBook form integration for the client.",
        image: WheelHouse,
        github: "https://github.com/frozzel/wheelhousestudios"
    },   
    {
        title: "Narcissist Social Media",
        description: "Ruby on Rails social media mock application of Instagram. This application uses an assortment of integrations including: Gem Turbo, Devise (User Auth), active storage with AWS S3, bootstrap, Saas, Postgresql and Drag & Drop Filepond. The app is deployed over Heroku with an AWS S3 bucket for picture sharing. It has photo post sharing, likes and comments along with following capabilities.",
        image: Narcissist,
        github: "https://github.com/frozzel/narcissistSocial"
    },    
    {
        title: "INDULGE E-commerce App",
        description: "Mock E-commerce site that utilizes global state and react hooks. The site is integrated with stripe payments. Full stack application with mongoDb/mongoose integrations & Apollo/graphql server side. React/Apollo integration front side utilizing global state and stripe integration along with animate.css and SASS.",
        image: Indulge,
        github: "https://github.com/frozzel/LUX"
    },
    {
        title: "Tikkitt ",
        description: "Tikkitt is an American cloud-based software company headquartered in Atlanta, GA. It provides customer relationship management (CRM) service and also provides enterprise applications focused on customer service, marketing automation, analytics, and application development.",
        image: Tikkitt,
        github: "https://github.com/frozzel/Tikkitt"
    },
    {
        title: "Node.js Server for Training LLMs",
        description: "Welcome to the Node.js server repository for testing and training Large Language Models (LLMs) utilizing OpenAI's ChatGPT API. This server acts as a flexible platform to interact with and extend language model functionalities through various testing and training protocols.",
        image: ChatGpt,
        github: "https://github.com/frozzel/LLM-Training-Server"
    }, 
    {
        title: "Authorize.Net Application",
        description: "Welcome to the MERN Stack Authorize.Net Application! This application serves as an example of how to integrate the Authorize.Net payment gateway into a MERN (MongoDB, Express.js, React, Node.js) stack.",
        image: AuthNet,
        github: "https://github.com/frozzel/auth.net-server"
    }
];


export default function ReactSlick() {
    const settings = {
        className: "slick-slider",
        dots: true,
        infinite: true,
        slidesToShow: 3, // Default number of slides
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768, // Screen width <= 768px (mobile devices)
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                    slidesToScroll: 1, // Scroll 1 slide at a time
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    
    
    return (
        <div className="slider-container">
        <Slider {...settings}>
          {/* <div>
            <h6 className="slider-card-title">Azure 3D Avatar and ChatGPT Integration</h6>
            <img src={Arwin} alt="placeholder" />
            <div className="slider-card-description">This project is a full-stack application built using the MERN stack (MongoDB, Express.js, React, Node.js) to deliver a dynamic, engaging user interaction experience. It integrates Azure's 3D avatar technology for life-like animations, including synchronized voice output and eye movements, and leverages OpenAI's ChatGPT for intelligent conversational responses.</div>
          </div> */}
            {slides.map((slide, index) => {
                return (
                <div key={index} className="slider-card2">
                    <a href={slide.github} target='_blank' rel="noreferrer">
                    <h6 className="slider-card-title">{slide.title}</h6>
                    <img src={slide.image} alt="placeholder" className="img-card" />
                    <div className="slider-card-description">{slide.description}</div>
                    {slide.description2 ? <div className="slider-card-description">{slide.description2}</div> : null}
                    </a>
                </div>
                );
            })}
      
        </Slider>
      </div>
  
    );
    }