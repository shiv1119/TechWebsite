import { Radio, Timeline } from 'antd';
import {Col,Row} from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';

import styles from './Experience.module.css'

const Experience = () => {
  return (
    <>
      <Row>
            <Col xl={16} offset={4} style={{display:"flex",flexDirection: "column", gap:"15px", marginTop:"-10px"}}>
                <div style={{fontSize:"2.5rem", fontWeight:"bold", color:"#ffffff"}}>Experience</div>
                <div style={{fontSize:"1.2rem", fontWeight:"500", color:"#ffffff",paddingTop:"2.5rem" }}> 
                <Timeline style={{color:"#fafafa"}}
                    mode="alternate"
                    items={[
                    {   
                        color: 'red',
                        style:{paddingBottom:"2.5rem"},
                        label: 'Start Date - End Date',
                        children: <>
                            <div style={{ padding: "15px", display:"flex", flexDirection:"row", gap:"25px", background:"linear-gradient(90deg, rgba(0,78,88,1) 0%, rgba(1,118,135,1) 10%, rgba(0,78,88,1) 100%)"}}>
                                <div>
                                <Image width={100}style={{border:"1px solid white", borderRadius:"50%", background:"rgb(0, 78, 88)"}} src="https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1631311446380?e=1726099200&v=beta&t=rqMa_4BPJeaFBksZ-tp8Dhvv_so6aSbsFd1gUD02G4g"/>
                                </div>
                                <div>
                                    <div className={styles.worktitle}>Senior Software Engineer</div>
                                    <div style={{fontSize:"1.1rem", fontWeight:"bold"}}>Google, Full-Time</div>
                                    <div className={styles.worklocation}>Bengaluru, Karnataka India</div>
                                    <div> 
                                        <div className={styles.roles}>Roles & Responsbilities</div>
                                            <ul className={styles.ul} style={{marginLeft:"40px"}}>
                                                <li>Roles 1</li>
                                                <li>Roles 2</li>
                                                <li>Roles- 3</li>
                                            </ul>
                                    </div>
                                    <div>
                                        <div className={styles.roles}>Skills :-</div>
                                        <div style={{fontSize: "1rem"}}>React Js, Java, Machine Learning, AI</div>
                                    </div>
                                </div>
                            </div>
                        </>,
                    },
                    {   
                        style:{paddingBottom:"2.5rem"},
                        label: 'Start Date - End Date',
                        children: <>
                        <div style={{ padding: "15px", display:"flex", flexDirection:"row-reverse", gap:"25px", background:"linear-gradient(90deg, rgba(0,78,88,1) 0%, rgba(1,118,135,1) 90%, rgba(0,78,88,1) 100%)"}}>
                            <div>
                            <Image width={100}style={{border:"1px solid white", borderRadius:"50%", background:"rgb(0, 78, 88)"}} src="data:image/png;base64,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"/>
                            </div>
                            <div>
                                <div className={styles.worktitle}>Senior Software Engineer</div>
                                <div className={styles.workcompany}>Google, Full-Time</div>
                                <div className={styles.worklocation}>Bengaluru, Karnataka India</div>
                                <div> 
                                    <div className={styles.roles}>Roles & Responsbilities</div>
                                        <ul className={styles.ul} style={{marginLeft:"40px"}}>
                                            <li>Roles 1</li>
                                            <li>Roles 2</li>
                                            <li>Roles- 3</li>
                                        </ul>
                                </div>
                                <div>
                                    <div className={styles.roles}>Skills :-</div>
                                    <div style={{fontSize: "1rem"}}>React Js, Java, Machine Learning, AI</div>
                                </div>
                            </div>
                        </div>
                    </>,
                    },
                    {   
                        label: 'Start Date - End Date',
                        children: <>
                        <div style={{ padding: "15px", display:"flex", flexDirection:"row", gap:"25px", background:"linear-gradient(90deg, rgba(0,78,88,1) 0%, rgba(1,118,135,1) 10%, rgba(0,78,88,1) 100%)"}}>
                            <div>
                            <Image width={100}style={{border:"1px solid white", borderRadius:"50%", background:"rgb(0, 78, 88)"}} src="https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1631311446380?e=1726099200&v=beta&t=rqMa_4BPJeaFBksZ-tp8Dhvv_so6aSbsFd1gUD02G4g"/>
                            </div>
                            <div>
                                <div className={styles.worktitle}>Senior Software Engineer</div>
                                <div className={styles.workcompany}>Google, Full-Time</div>
                                <div className={styles.worklocation}>Bengaluru, Karnataka India</div>
                                <div> 
                                    <div className={styles.roles}>Roles & Responsbilities</div>
                                        <ul className={styles.ul} style={{marginLeft:"40px"}}>
                                            <li>Roles 1</li>
                                            <li>Roles 2</li>
                                            <li>Roles- 3</li>
                                        </ul>
                                </div>
                                <div>
                                    <div className={styles.roles}>Skills</div>
                                    <div style={{fontSize: "1rem"}}>React Js, Java, Machine Learning, AI</div>
                                </div>
                            </div>
                        </div>
                    </>,
                    },
                    ]}
                />
                </div>
            </Col>
        </Row>
    </>
  );
};
export default Experience;