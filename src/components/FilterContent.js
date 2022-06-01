import React from 'react';
import styles from '../styles/FilterContent.module.css';
import { Row, Empty } from 'antd';
import PersonItem from './PersonItem';

function FilterContent(prop) {
    console.log(prop.data.length);

    let persons = '';

    if( prop.data.length > 0 ) {
        persons = prop.data.map((item) => {
            return <PersonItem item={item} key={item.id}/>
        })
    } else {
        persons = <Empty className='m-auto' image={Empty.PRESENTED_IMAGE_SIMPLE} />
    }

    return(
        <section className={styles['content-wrapper']}>
            <Row>
                { persons }
            </Row>
        </section>
    )
}

export default FilterContent;