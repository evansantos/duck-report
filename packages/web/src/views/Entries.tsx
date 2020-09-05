import React, { useState, useEffect } from 'react';
import { getDuckReports } from '../services/ducks.services';
import { Table, Grid } from 'semantic-ui-react';
import Report from '../interfaces/report.interface';

const fieldNames = {
  datetime: 'Date & time',
  food: 'Food',
  location: 'Location',
  quantity: 'How many ducks were fed',
  foodType: 'Type of food',
  amount: 'Amount of food (in grams)',
};

const localeDateTime = (date: any) => {
  return new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(new Date(date));
};

const Entries = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getDuckReports().then(({ data }) => {
      setReports(data);
    });
  }, []);

  return (
    <Grid padded="vertically">
      <Grid.Row centered>
        <Grid.Column width={14}>
          <Table striped>
            <Table.Header>
              <Table.Row>
                {reports.length &&
                  Object.keys(reports[0]).map((key) => {
                    if (key === '_id') {
                      return null;
                    }

                    // @ts-ignore
                    return <Table.Cell key={`header_${reports[0]._id}_${key}`}>{fieldNames[key]}</Table.Cell>;
                  })}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {reports.map((report: Report) => (
                <Table.Row key={report._id}>
                  {Object.keys(report).map((key) => {
                    // @ts-ignore
                    if (key === '_id') {
                      return null;
                    }

                    if (key === 'datetime') {
                      // @ts-ignore
                      return <Table.Cell key={`header_${report._id}_${key}`}>{localeDateTime(report[key])}</Table.Cell>;
                    }

                    // @ts-ignore
                    return <Table.Cell key={`${report._id}_${key}`}>{report[key]}</Table.Cell>;
                  })}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Entries;
