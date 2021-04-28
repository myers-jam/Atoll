import React, { useState, useEffect } from 'react';
import api from '../../apiService/api';
import { Button, Table } from 'react-bootstrap';
import './landing.css';
import '../Navbar/navbar.css';
import { withRouter } from 'react-router-dom';
import Nav_bar from '../Navbar';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';
import Section5 from '../Section5';
import Section6 from '../Section6';
import Section7 from '../Section7';
import Section8 from '../Section8';
import Section9 from '../Section9';

function Landingpage() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    (async () => { 
      try {
        let log = 0;
        const interval = setInterval(async () => {
          log += 1;
          console.log('refreshing data', log);
          await getChangelogs();
      }, 10000 );
  
      return () => clearInterval(interval);

    } catch (error) {
      console.log(error);
    }
  })();
  }, []);


  async function getChangelogs() {
    try {

      const logs = await api.get('/getChangelogs');
      let logList = logs.data;
      let id = 0;
      const logTable = logList.map(changelog => {
        const author = changelog.author;
        const date = changelog.date.substring(0,10);
        const description = changelog.description;
        id += 1;
        return ({id, date, author, description});
      });

      setTableData(logTable);

    } catch (error) {
      console.log(error);
    }
  }


  const renderChangelogs = (changelog, index) => {
    return (
      <tr key={index}>
        <td>{changelog.id}</td>
        <td className='space'>{changelog.date}</td>
        <td className='auth'>{changelog.author}</td>
        <td>{changelog.description}</td>
      </tr>
    );
  }; 


  // everything inside the return is JSX (JavaScript XML) and is what gets rendered to screen
  return (



    // <Container>
    <div>
      <Nav_bar  />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />

      <div className='container'>
        <div className='content'>
      
          <h4 className='changelogs-h4'>Changelogs</h4>

          <Table className='changelogsTable' hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Author</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tableData ? tableData.map(renderChangelogs) 
              :
              ''}
          </tbody>
        </Table>


        </div>
      </div>
    </div>
    // </Container>
  );
}

export default withRouter(Landingpage);