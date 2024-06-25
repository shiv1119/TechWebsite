import { Image,Card, Row, Col } from "antd"
import GitHubStats from "./GitHubStats";
import Link from "next/link";
import { motion } from "framer-motion";
import Slide from "./slide";
import Show from "./show";
const Projects = () =>{
    return(
        <>
            <Row gutter={20}>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} style={{marginBottom:"20px"}} className="large_text"><Show delay={0.2}>Projects</Show></Col>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} style={{display:"flex"}}>
                    <Row gutter={[20, 20]}>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Show delay={0.2}>
                        <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}                        
                        >
                        <Card hoverable={true}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Row gutter={[20, 15]} style={{display:"flex",alignItems:"center"}}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={14}><Image preview={false}  style={{width:"100%", objectFit:"contain", borderRadius:"5px"}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" /></Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{lineHeight:"1.2rem"}} className="medium_text">Blogging Webiste</Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginBottom:"2px"}}><a href="">Live</a></Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{lineHeight:"0.9rem"}}><a href="#">GIthub Link</a></Col>
                                </Col>
                            </Row>
                        </Col> 
                        <Col style={{marginTop:"10px"}}>
                            <details>
                                <summary style={{cursor:"pointer"}}>Description</summary>
                                <ul style={{}}>
                                    <li>I'm description 1</li>
                                    <li>I'm description 2</li>
                                    <li>I'm description 3</li>
                                    <li>I'm description 4</li>
                                </ul>
                            </details>
                        </Col>     
                    </Card>
                    </motion.div>
                    </Show>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Show delay={0.2}>
                        <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        >
                        <Card hoverable={true}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{display:"flex",alignItems:"center"}}>
                            <Row gutter={[20, 15]} style={{display:"flex",alignItems:"center"}}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={14}><Image preview={false} style={{width:"100%", objectFit:"contain", borderRadius:"5px"}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" /></Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{lineHeight:"1.3rem"}} className="medium_text">Blogging Webiste</Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginBottom:"2px"}}><a href="#">Live</a></Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{lineHeight:"0.9rem"}}><a href="#">GIthub Link</a></Col>
                                </Col>
                            </Row>
                        </Col> 
                        <Col style={{marginTop:"10px"}}>
                            <details>
                                <summary style={{cursor:"pointer"}}>Description</summary>
                                <ul style={{}}>
                                    <li>I'm description 1</li>
                                    <li>I'm description 2</li>
                                    <li>I'm description 3</li>
                                    <li>I'm description 4</li>
                                </ul>
                            </details>
                        </Col>     
                    </Card>
                    </motion.div>
                    </Show>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Show delay={0.2}>
                    <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    >
                        <Card hoverable={true}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{display:"flex",alignItems:"center"}}>
                            <Row gutter={[20, 15]} style={{display:"flex",alignItems:"center"}}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={14}><Image preview={false}  style={{width:"100%", objectFit:"contain", borderRadius:"5px"}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" /></Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{lineHeight:"1.2rem"}} className="medium_text">Blogging Webiste</Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginBottom:"2px"}}><a href="#">Live</a></Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{lineHeight:"0.9rem"}}><a href="#">GIthub Link</a></Col>
                                </Col>
                            </Row>
                        </Col> 
                        <Col style={{marginTop:"10px"}}>
                            <details>
                                <summary style={{cursor:"pointer"}}>Description</summary>
                                <ul style={{}}>
                                    <li>I'm description 1</li>
                                    <li>I'm description 2</li>
                                    <li>I'm description 3</li>
                                    <li>I'm description 4</li>
                                </ul>
                            </details>
                        </Col>     
                    </Card>
                    </motion.div>
                    </Show>
                    </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} style={{display:"flex", justifyContent: "center", marginTop:"25px"}}>
                <motion.div whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.9 }}><a className="git_link small_text" href="https://github.com/shiv1119?tab=repositories"><Show delay={0.2}>Click For More</Show></a></motion.div>
                </Col>
            </Row>
        </>
    )
}

export default Projects;