import React from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import moment from 'moment';
import { useState } from 'react';
import FilterForm from './components/FilterForm';
import FilterContent from './components/FilterContent';
import { Row, Col } from 'antd';
import { Data } from './Data';

const App = () => {

  const [allData, setAllData] = useState(Data);

  const handleChange = (filter) => {
    let { name, email, gender, from, to } = filter;

    let filterdData = [...Data];

    filterdData = filterdData.filter(item => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if( fullName.toLowerCase().includes(name.toLowerCase()) ) {
        return item;
      }
      return false;
    });

    filterdData = filterdData.filter(item => {
      if( item.email.toLowerCase().includes(email.toLowerCase()) ) {
        return item;
      }
      return false;
    });

    filterdData = filterdData.filter(item => {
      if( item.gender === gender ) {
        return item;
      } else if( gender === '' ) {
        return item;
      }
      return false;
    });

    filterdData = filterdData.filter(item => {
      let isBetween = moment(item.date).isBetween(from, to);
      if( isBetween ) {
        return item;
      } else if( from === '' || to === '' ) {
        return item;
      }
      return false;
    });

    setAllData(filterdData);
  }

  return (
    <div className='wrapper'>
      <div className='container-fluid'>
        <Row>
          <Col xs={{span:24}} sm={{span: 24}} md={{span: 24}} lg={{span: 6}}>
            <FilterForm 
              onFilter={handleChange}
            />
          </Col>
          <Col xs={{span:24}} sm={{span: 24}} md={{span: 24}} lg={{span: 18}}>
            <FilterContent data={allData} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
