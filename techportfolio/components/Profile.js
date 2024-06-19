import React from 'react';
import { Col, Row } from 'antd';
import { Image } from 'antd';

const Profile = () => {
    return (
        <>
           <Row>
                <Col xs={16} sm={16} md={16} lg={16} xl={16} offset={4} style={{width:"100%", height:"auto"}}>
                    <Row gutter={40}>
                        <Col xs={10} sm={10} md={10} lg={10} xl={10} style={{display:"flex", justifyContent: "end"}}>
                        <Image width={300}style={{border:"4px solid white", borderRadius:"50%"}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                        </Col>
                        <Col xs={14} sm={14} md={14} lg={14} xl={14} style={{display:"flex", justifyContent:"center", alignContent:"center", flexDirection:"column"}}>
                            <p style={{fontSize:"2.5rem", fontWeight:"bold", color:"#ffffff"}}>Shiv Nandan Verma</p>
                            <p style={{fontSize:"1.3rem",fontWeight:"600", color:"#ffffff"}}>Senior Sodtware Engineer at Googlu Baba</p>
                            <p style={{fontSize:"1.2rem", fontWeight:"500", color:"#ffffff"}}>Bengaluru Karnataka</p>
                            <a href="#" style={{fontSize:"1.3rem", fontWeight:"700", color:"#dbdbdb"}}>Conatact Info</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Profile;