"use client";
import {Image, Row, Col, Card, Anchor } from "antd";
import Link from 'next/link';
import styles from './Certificates.module.css'
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from 'react';





const Certificates = () => {
    const variant = {
        visible: { scale: 1 },
        hidden: { scale: 0 },
      };
    return (
        <>
            <Row>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} style={{width:"100%", height:"auto"}}> 
                <div  className="large_text bottom_pad">License & Certifications</div>
                    <Row gutter={[20, 20]}>
                    <Col xs={24} sm={{span:24}} md={12} lg={8} xl={8} style={{display:"flex", justifyContent:"center", alignContent:"center", flexDirection:"column"}}>  
                            <Link href="https://www.coursera.org/account/accomplishments/specialization/F4KTBE473M7D">
                                <motion.div
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.9 }}
                                >
                                <Card style={{}} hoverable={true} title=
                                    <div style={{display:"flex", gap:"15px",overflow:"hidden", alignItems:"center", padding:"15px 0px"}}>
                                        <div className='logo_max_width'>
                                            <Image preview={false}  className="logo_width" style={{padding:"5px"}} src="/images/codio_logo.png"/>
                                        </div>
                                        <div style={{whiteSpace:"normal", lineHeight:1.2, wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}} className="medium_small2">Programming in C++: A Hands-on Introduction</div>
                                    </div>
                                >
                                    <div>
                                        <div style={{display:"flex", justifyContent:"center"}}>
                                        <iframe
                                            className={styles.pdf_class}
                                            src="/pdfs/codio_cpp.pdf"
                                        ></iframe>
                                        </div>
                                        <div style={{ marginTop:"10px", marginLeft:"10px"}} className="small_text">
                                            Click For More
                                        </div>
                                    </div>
                                </Card>
                                </motion.div>
                            </Link>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{display:"flex", justifyContent:"center", alignContent:"center", flexDirection:"column"}}>  
                            <Link href="https://www.coursera.org/account/accomplishments/specialization/F4KTBE473M7D">
                                <motion.div
                                whileInView={{ opacity: 1, scale: 1 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.9 }}
                                >
                                <Card style={{}} hoverable={true} title=
                                    <div style={{display:"flex", gap:"15px",overflow:"hidden", alignItems:"center", padding:"15px 0px"}}>
                                        <div className='logo_max_width'>
                                            <Image preview={false}  className="logo_width" style={{padding:"5px"}} src="/images/codio_logo.png"/>
                                        </div>
                                        <div style={{whiteSpace:"normal", lineHeight:1.2, wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}} className="medium_small2">Programming in C++: A Hands-on Introduction</div>
                                    </div>
                                >
                                    <div>
                                        <div style={{display:"flex", justifyContent:"center"}}>
                                        <iframe
                                            className={styles.pdf_class}
                                            src="/pdfs/codio_cpp.pdf"
                                        ></iframe>
                                        </div>
                                        <div style={{marginTop:"10px", marginLeft:"10px"}} className="small_text">
                                            Click For More
                                        </div>
                                    </div>
                                </Card>
                                </motion.div>
                            </Link>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{display:"flex", justifyContent:"center", alignContent:"center", flexDirection:"column"}}>  
                            <Link href="https://www.coursera.org/account/accomplishments/specialization/F4KTBE473M7D">
                                <motion.div
                                whileInView={{ opacity: 1, scale: 1 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.9 }}
                                >
                                <Card style={{}} hoverable={true} title=
                                    <div style={{display:"flex", gap:"15px",overflow:"hidden", alignItems:"center", padding:"15px 0px"}}>
                                        <div className='logo_max_width'>
                                            <Image preview={false}  className="logo_width" style={{padding:"5px"}} src="/images/codio_logo.png"/>
                                        </div>
                                        <div style={{whiteSpace:"normal", lineHeight:1.2, wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}} className="medium_small2">Programming in C++: A Hands-on Introduction</div>
                                    </div>
                                >
                                    <div>
                                        <div style={{display:"flex", justifyContent:"center"}}>
                                        <iframe
                                            className={styles.pdf_class}
                                            src="/pdfs/codio_cpp.pdf"
                                        ></iframe>
                                        </div>
                                        <div style={{marginTop:"10px", marginLeft:"10px"}} className="small_text">
                                            Click For More
                                        </div>

                                    </div>
                                </Card>
                                </motion.div>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
     </>
    )
}

export default Certificates;