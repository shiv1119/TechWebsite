
import {Col,Row} from "antd";
const About = () =>{
    return (
        <>
            <Row>
                <Col xl={16} offset={4} style={{display:"flex",flexDirection: "column", gap:"15px", marginTop:"-10px"}}>
                    <div style={{fontSize:"2.5rem", fontWeight:"bold", color:"#ffffff"}}>About</div>
                    <div style={{fontSize:"1.2rem", fontWeight:"500", color:"#ffffff", textAlign:"justify"}}> 
                    Passionate and results-driven software engineer with over [X] years of experience in designing, developing, and maintaining innovative software solutions. Adept at leveraging a diverse array of programming languages and technologies to deliver robust and scalable applications. Proven track record in leading projects from concept to completion, ensuring timely delivery and adherence to high-quality standards.

                    My expertise lies in full-stack development, with a strong focus on [specific technologies, e.g., JavaScript, Python, React, Node.js]. I excel in collaborative environments, working closely with cross-functional teams to translate business requirements into technical solutions. Skilled in agile methodologies and committed to continuous learning and professional development, I thrive in dynamic and challenging settings.
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default About;