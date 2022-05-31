import styles from '../styles/FilterContent.module.css';
import { Row } from 'antd';
import PersonItem from './PersonItem';

function FilterContent(prop) {
    return(
        <section className={styles['content-wrapper']}>
            <Row>
                {
                    prop.data.map((item) => {
                        return <PersonItem item={item} key={item.id}/>
                    })
                }
            </Row>
        </section>
    )
}

export default FilterContent;