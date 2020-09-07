import React, { useState, useEffect } from 'react';
import { getDuckReports } from '../services/ducks.services';
import { Table, Grid, Segment, Dimmer, Loader, Image } from 'semantic-ui-react';
import Report from '../interfaces/report.interface';

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getDuckReports().then(({ data }) => {
      setReports(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Grid padded="vertically">
      <Grid.Row centered>
        <Grid.Column width={14}>
          {isLoading ? (
            <>
              <Segment>
                <Dimmer active inverted>
                  <Loader size="large">Loading</Loader>
                </Dimmer>

                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              </Segment>
            </>
          ) : (
            <Table striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date & time</Table.HeaderCell>
                  <Table.HeaderCell>Type of food</Table.HeaderCell>
                  <Table.HeaderCell>Food</Table.HeaderCell>
                  <Table.HeaderCell>Location</Table.HeaderCell>
                  <Table.HeaderCell>How many ducks were fed</Table.HeaderCell>
                  <Table.HeaderCell>Amount of food (in grams)</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              {reports.length ? (
                <Table.Body>
                  {reports.map((report: Report) => (
                    <Table.Row key={report._id}>
                      <Table.Cell>{localeDateTime(report.datetime)}</Table.Cell>
                      <Table.Cell>{report.foodType}</Table.Cell>
                      <Table.Cell>{report.food}</Table.Cell>
                      <Table.Cell>{report.location}</Table.Cell>
                      <Table.Cell>{report.quantity}</Table.Cell>
                      <Table.Cell>{report.amount}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              ) : (
                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing>No data available, add some reports to populate it</Table.Cell>
                  </Table.Row>
                </Table.Body>
              )}
            </Table>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Entries;
