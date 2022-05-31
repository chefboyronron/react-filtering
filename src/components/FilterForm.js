import { useState, useEffect } from 'react';
import styles from '../styles/FilterForm.module.css';
// import moment from 'moment';
import { Input, Select, DatePicker, Space, Divider } from 'antd';
import { Data } from '../Data';

const { Option } = Select;
const { RangePicker } = DatePicker;

const disabledDate = (current) => {
    // return current && current <= moment().startOf('day');
};

const generateGenderDropdownData = () => {
    return [...new Set(Data.map((item) => item.gender))]
};

const FilterForm = ({ onFilter }) => {

    const [GenderOptions, setGenderOptions] = useState([]);

    const [ filters, setFilters ] = useState({
        name: '',
        email: '',
        gender: '',
        from: '',
        to: '',
    });

    const handleInput = (field) => (event) => {

        const { value } = (typeof event === 'string') ? event : event.target;

        const filterValues = {
            ...filters,
            [field]: (typeof event === 'string') ? event : value
        }

        setFilters(filterValues);
        onFilter(filterValues);
    }

    const getDates = (dates, dateString) => {
        const filterValues = {
            ...filters,
            from: dateString[0],
            to: dateString[1]
        }
        setFilters(filterValues);
        onFilter(filterValues);
    }

    useEffect(()=>{
        const genders = generateGenderDropdownData();
        setGenderOptions(genders);
    }, []);

    return (
        <section className={styles.side_wrapper}>
            <Divider orientation="center">
                <h1>Filters</h1>
            </Divider>

            <label htmlFor="name">Name</label>
            <Input className={styles.form_control} id='name' value={filters.name} onChange={handleInput('name')} />
            
            <label htmlFor="email">Email</label>
            <Input className={styles.form_control} id='email' onChange={handleInput('email')} />

            <label htmlFor="gender">Gender</label>
            <Select className={styles.form_control} defaultValue="" id="gender" style={{ width: '100%' }} onChange={handleInput('gender')}>
                <Option value="">--Select--</Option>
                {
                    GenderOptions.sort((a, b) => {
                        return a.localeCompare(b);
                    }).map((gender, key) => {
                        return (
                            <Option value={gender} key={key}>{gender}</Option>
                        )
                    })
                }
            </Select>

            <label htmlFor="date">Date</label>
            <Space direction="vertical" id="date" className={styles.form_control} style={{ width: '100%' }}>
                <RangePicker disabledDate={disabledDate} style={{ width: '100%' }} onChange={getDates} />
            </Space>
        </section>
    )
}

export default FilterForm;