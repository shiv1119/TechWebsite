import styles from './Hr.module.css'
import { Col } from 'antd';

const Hr = () => {
    return (
        <Col xs={16} sm={16} md={16} lg={16} xl={16} offset={4} className={styles.bodyhr}></Col>
    )
}


export default Hr;