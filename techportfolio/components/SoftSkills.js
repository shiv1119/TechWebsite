import { Button, Row, Col } from 'antd';
import styles from './SoftSkills.module.css'
import Show from './show';

const SoftSkills =()=>{
    return(
    <Show delay={0.2}>
    <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} style={{display:"flex",flexDirection: "column", gap:"15px", marginTop:"-10px"}}>
            <div className='large_text'>Soft Skills</div>
            <Row xl={24} style={{display:"flex", justifyContent:"center"}} className='small_text flex_gap'>
                <div className={styles.soft_skills}>
                    Ram Ram
                </div>
                <div className={styles.soft_skills}>
                    Ram Ram
                </div>
                <div className={styles.soft_skills}>
                    Ram Ram
                </div>
                <div className={styles.soft_skills}>
                    Ram Ram
                </div>
                <div className={styles.soft_skills}>
                    Ram Ram
                </div>
                <div className={styles.soft_skills}>
                    Ram Ram
                </div>
                <div className={styles.soft_skills}>
                    Ram Ram
                </div>
                <div className={styles.soft_skills}>
                    Ram Ram
                </div>
                <div className={styles.soft_skills}>
                    Ram Ram
                </div>
                
            </Row>
        </Col>
    </Row>
    </Show>
    );
}

export default SoftSkills;