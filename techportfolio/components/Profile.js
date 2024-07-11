import React from 'react';
import { Col, Row } from 'antd';
import { Typewriter } from './TYpewriter';
import {Image } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOutlined, LinkedinFilled, GithubFilled, TwitterSquareFilled, PhoneFilled   } from '@ant-design/icons';
import RightSlide from './RightSlide';
import Slide from './slide';

const Profile = () => {
    return (
        <>
           <Row>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} style={{width:"100%", height:"auto"}}>
                    <Row gutter={[30,20]}>
                        <Col xs={24} sm={24} md={10} lg={12} xl={12} className='profile_flex'>
                            <RightSlide>
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='dp_max_width'>
                            <Image preview={false} className='dp'  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                            </motion.div>
                            </RightSlide>
                        </Col>
        
                        <Col xs={24} sm={24} md={14} lg={12} xl={12} className='profile_info_flex'>
                            <Slide className="profile_info_flex">
                            <div style={{}} className='large_text'><Typewriter texts={["Shiv Nandan Verma", "Fullstack Developer", "DevOps Engineer"]} /></div>
                            <p style={{fontWeight:"bold"}} className='medium_text text_center'>Senior Software Engineer at Googlu Baba</p>
                            <p style={{}} className='medium_text'>Bengaluru Karnataka</p>
                            <div style={{marginTop:"5px", display:"flex", gap:"13px"}}>
                                <motion.a
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.9 }}
                                className='contacts' href="tel:+919076522608"><PhoneFilled /></motion.a>
                                <motion.a 
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.9 }}
                                className='contacts' href="mailto:webmaster@example.com"> <LinkedinFilled /></motion.a>
                                <motion.a 
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.9 }}
                                className='contacts' href="mailto:webmaster@example.com"> <MailOutlined /> </motion.a>
                                <motion.a 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.08 }}
                                className='contacts' href="mailto:webmaster@example.com"> <GithubFilled /></motion.a>
                                <motion.a 
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.9 }}
                                className='contacts' href="mailto:webmaster@example.com"> <TwitterSquareFilled /> </motion.a>

                            </div>
                            </Slide>
                            
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Profile;