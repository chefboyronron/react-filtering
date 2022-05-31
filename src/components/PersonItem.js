import moment from 'moment';
import styles from '../styles/FilterContent.module.css';
import { Col, Card } from 'antd';

const PersonItem = (prop) => {
    return (
        <Col className={styles.card} xs={{span:24}} sm={{span:24}} md={{span:8}}>
            <Card cover={<img alt="example" src={prop.item.image} />}>
                <h2>{prop.item.first_name} {prop.item.last_name}</h2>
                <p>{prop.item.email}</p>
                <p>{prop.item.gender}</p>
                <p>{moment(prop.item.date).format('D MMMM YYYY')}</p>
            </Card>
        </Col>
    )
}

export default PersonItem;