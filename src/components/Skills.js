import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import reactLogo from "../assets/img/react-logo.png"
import jsLogo from "../assets/img/js-logo.png"
import postmanLogo from "../assets/img/postman-logo.webp"
import webDevLogo from "../assets/img/webDevLogo.png"
import cLogo from "../assets/img/C++_logo.png"
import dbmsLogo from "../assets/img/png-transparent-database-management-system-dbms-logo.png"
import javaLogo from "../assets/img/javaLogo.png"
import gitLogo from '../assets/img/nav-icon5.svg';
import springBootLogo from "../assets/img/spring-boot-logo.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Over time, I've cultivated a diverse skill set in programming and web development, including proficiency in both frontend and backend development as well as database management.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactLogo} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={jsLogo} alt="Image" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={cLogo} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={dbmsLogo} alt="Image" />
                                <h5>DBMS</h5>
                            </div>
                            <div className="item">
                                <img src={springBootLogo} alt="Image" />
                                <h5>SpringBoot</h5>
                            </div>
                            <div className="item">
                                <img src={gitLogo} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={postmanLogo} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img src={webDevLogo} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={javaLogo} alt="Image" />
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
