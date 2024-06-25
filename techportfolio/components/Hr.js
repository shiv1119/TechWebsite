import styles from './Hr.module.css'
import { Col } from 'antd';

const Hr = () => {
    return (
        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} className={styles.bodyhr}></Col>
    )
}


export default Hr;