import styles from './Skills.module.css'
import {Progress, Row, Col, Image } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {

    const variant = {
        visible: { scale: 1 },
        hidden: { scale: 0 },
      };
    return (
        <>
            <Row
            >
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} style={{display:"flex",flexDirection: "column", gap:"15px", marginTop:"-10px"}}>
                    <div style={{}} className='large_text'>Technical Skills</div>
                    <Row xl={24} style={{display:"flex", gap:"30px", marginTop:"45px"}}>
                        <motion.div  
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }} 
                        style={{ marginTop: "-35px", color:"white"}} className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/cpp.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#fafafa"}} />
                        </motion.div>
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}
                        className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/java.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}  
                        style={{marginTop: "-35px"}} className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/javascript.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}
                         className='logo_max_width'>
                            <Image preview={false} className='logo_width' style={{}} src="images/php.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}  
                        style={{marginTop: "-35px"}} className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/python.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}
                        className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/typescript.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}
                        style={{ marginTop: "-35px"}} className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/node.js.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         
                        whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}
                        className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/html.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}
                        style={{ marginTop: "-35px"}} className='logo_max_width'>
                            <Image preview={false}  className="logo_width" style={{}} src="images/css.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}
                        className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/Rust.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}
                        style={{ marginTop: "-35px"}} className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/swift.png" />
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}
                        className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/r.png"/>
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        <motion.div 
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.9 }}
                        style={{ marginTop: "-35px"}} className='logo_max_width'>
                            <Image preview={false}  className='logo_width' style={{}} src="images/cprogramming.png" />
                            <Progress percent={70} trailColor="lightgrey" strokeColor="#047a06" style={{color:"#047a06"}} />
                        </motion.div >
                        
                    </Row>
                </Col>
            </Row>
        </>
    )
}


export default Skills;