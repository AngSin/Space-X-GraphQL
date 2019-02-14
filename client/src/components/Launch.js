import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import moment from 'moment';

const getLaunchesQuery = gql`
    query LaunchesQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
          mission_name
          launch_date_local
          launch_success
          rocket {
            rocket_id
            rocket_name
            rocket_type
          }
        }
    }
`;

export default class Launch extends Component {
  render() {
    const { flight_number: num_string } = this.props.match.params;
    const flight_number = Number(num_string);
    return (
      <div>
        <Query query={getLaunchesQuery} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) return <h4>Something went wrong</h4>;
            return (
              <div>
                <h1>{data.launch.mission_name}</h1>
                <p>Launch Date: {moment(data.launch.launch_date_local).format('DD-MM-YY HH:mm')}</p>
                <p>Launch Successful: {data.launch.launch_success ? 'Yes' : 'No'}</p>
                <p>Rocket used: {data.launch.rocket.rocket_name}</p>
                <p>Type of rocket used: {data.launch.rocket.rocket_type}</p>
                <p>Rocket ID: "{data.launch.rocket.rocket_id}"</p>
              </div>
            );
          }}
        </Query>
      </div>
    )
  }
}
