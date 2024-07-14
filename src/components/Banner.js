import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { HashLink } from 'react-router-hash-link';
// import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/banner-bg2.jpg'

export const Banner = () => {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Web Developer","Programmer"];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300- Math.random()*100);
    const period = 2000;

    useEffect(()=> {
        let ticker = setInterval(()=>{
          tick();
        },delta)

        return () => {clearInterval(ticker)};
    },[text]);
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
        //   setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        //   setIndex(1);
          setDelta(500);
        } 
        // else {
        //   setIndex(prevIndex => prevIndex + 1);
        // }
      }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Anshika Jain `}</h1>
                        <h2><span className="wrap">{text}</span></h2>
                        <p>Result-driven web developer with 1 year of experience, demonstrating proficiency in diverse 
programming languages. Proven ability to create efficient and visually appealing web solutions. 
Strong problem-solving skills and a passion for staying current with industry trends</p>

<h2>Links:</h2>
<ul>
  <li>Geeks For Geeks: <a href="https://auth.geeksforgeeks.org/user/anshikajain24" target="_blank">//anshikajain24</a></li>
  <li>CodeChef: <a href="https://www.codechef.com/users/anshika2432001" target="_blank">//anshikajain2432001</a></li>
  <li>LeetCode: <a href="https://leetcode.com/anshika2432001/" target="_blank">//anshikajain2432001</a></li>
  <li>HackerRank: <a href="https://www.hackerrank.com/profile/12019009001331_G" target="_blank">//anshikajain24</a></li>
</ul>

                      
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}