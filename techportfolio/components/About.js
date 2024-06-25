
import {Col,Row} from "antd";
import RightSlide from "./RightSlide";
const About = () =>{
    return (
        <RightSlide>
            <Row>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} style={{display:"flex",flexDirection: "column", marginTop:"-10px"}} className="flex_gap">
                    <div className="large_text">About</div>
                    <div className="medium_small" style={{textAlign:"justify"}}> 
                    Passionate and results-driven software engineer with over [X] years of experience in designing, developing, and maintaining innovative software solutions. Adept at leveraging a diverse array of programming languages and technologies to deliver robust and scalable applications. Proven track record in leading projects from concept to completion, ensuring timely delivery and adherence to high-quality standards.

                    My expertise lies in full-stack development, with a strong focus on [specific technologies, e.g., JavaScript, Python, React, Node.js]. I excel in collaborative environments, working closely with cross-functional teams to translate business requirements into technical solutions. Skilled in agile methodologies and committed to continuous learning and professional development, I thrive in dynamic and challenging settings.
                    </div>
                </Col>
            </Row>
        </RightSlide>
    );
}

export default About;