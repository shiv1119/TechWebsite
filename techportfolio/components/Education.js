import {Avatar, Card, Col,Row} from "antd";
import {Image} from "antd";

import styles from './Education.module.css'
const Education = () =>{
    return (
        <>
            <Row>
                <Col xl={16} offset={4}>
                    <div style={{fontSize:"2.5rem", fontWeight:"bold", color:"#ffffff", paddingBottom:"40px"}}>Education</div>
                    <Row gutter={40}>
                        <Col xl={12} style={{display:"flex", justifyContent: "end"}}> 
                            <Card style={{background:"rgb(0, 78, 88)", border:"1px solid white", borderRadius:"10px"}} title=
                            <>
                            <div style={{display:"flex", flexDirection:"row", gap:"20px", alignItems:"center", padding:"20px 0px"}}>
                                <div><Image width={100}style={{border:"3px solid white"}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                                </div>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <div>Bachelor Of Technology</div>
                                    <div>Computer Science & Engineering</div>
                                    <div>2022 - 2026</div>
                                </div>
                            </div>
                            </>
                            bordered={false}>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={12} style={{display:"flex", justifyContent: "start"}}>
                            <Card title="Card title" bordered={false}>
                                Content
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Education;