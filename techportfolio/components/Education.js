import {Avatar, Card, Col,Row} from "antd";
import {Image} from "antd";
import styles from './Education.module.css'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

const Education = () =>{

    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
        <motion.div                                
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        >
            <Row>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset:  3}} xl={{ span: 16, offset: 4 }}>
                    <div style={{fontWeight:"bold"}} className="large_text bottom_pad">Education</div>
                    <Row gutter={[20, 20]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} > 
                            <motion.div

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                            >
                            <Card hoverable={true} style={{}} title=
                            <>
                            <div style={{display:"flex", flexDirection:"row", gap:"20px", alignItems:"center", padding:"20px 0px"}}>
                                <div className='logo_max_width'><Image preview={false}  className="logo_width" style={{}} src="/images/Alliance_University_Icon.svg.png"/>
                                </div>
                                <div style={{display:"flex", flexDirection:"column", lineHeight:1.2}} >
                                    <div className="medium_small2" style={{whiteSpace:"normal", lineHeight:1.2, wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}}>Bachelor Of Technology</div>
                                    <div className="medium_small" style={{whiteSpace:"normal", lineHeight:1.2, wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}}>Computer Science & Engineering</div>
                                    <div className="medium_small" style={{whiteSpace:"normal", lineHeight:1.2, wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}}>2022 - 2026</div>
                                </div>
                            </div>
                            </>
                            bordered={false}>
                            <div className="small_text">
                                    <div style={{display:"flex", gap:"8px", alignItems:"center"}} >
                                        <div>
                                        <Image width={15}  src="/images/SchoolIcon.png"/>
                                        </div>
                                        <div style={{whiteSpace:"normal", lineHeight:1.2, wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}}>
                                            Alliance College of Engineering & Design
                                        </div>
                                    </div>
                                    <div style={{display:"flex", gap:"8px", alignItems:"center", marginBottom:"5px"}}>
                                        <div>
                                        <Image width={15}  src="/images/location.png"/>
                                        </div>
                                        <div>
                                            Bengaluru, Karnataka, India - 562106
                                        </div>
                                    </div>
                                    <div>Skills : </div>
                                    <div>Activities : </div>
                                </div>
                            </Card>
                            </motion.div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} > 
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Card hoverable={true}  style={{}} title=
                            <>
                            <div style={{display:"flex", flexDirection:"row", gap:"20px", alignItems:"center", padding:"20px 0px"}}>
                                <div className='logo_max_width'><Image preview={false} className="logo_width"  style={{}} src="/images/images.jpeg"/>
                                </div>
                                <div style={{display:"flex", flexDirection:"column",lineHeight:1.2}}>
                                    <div className="medium_small2">Intermediate</div>
                                    <div className="medium_small" style={{ whiteSpace:"normal", lineHeight:1.2, wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}}>Physics, Chemistry, Maths</div>
                                    <div className="medium_small">2022 - 2026</div>
                                </div>
                            </div>
                            </>
                            bordered={false}>
                                <div className="small_text">
                                    <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
                                        <div>
                                        <Image width={15}  src="/images/SchoolIcon.png"/>
                                        </div>
                                        <div>
                                            Jagran Public School
                                        </div>
                                    </div>
                                    <div style={{display:"flex", gap:"8px", alignItems:"center", marginBottom:"5px"}}>
                                        <div>
                                        <Image width={15}  src="/images/location.png"/>
                                        </div>
                                        <div style={{whiteSpace:"normal", lineHeight:1.2, wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}}>
                                            Lucknow, Uttar Pradesh, India - 272132
                                        </div>
                                    </div>
                                    <div>Skills : </div>
                                    <div>Activities : </div>
                                </div>
                            </Card>
                        </motion.div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </motion.div>
    );
}

export default Education;