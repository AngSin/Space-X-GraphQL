import React from 'react';
import ClassNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem({
  launch: {
    flight_number, mission_name, launch_date_local, launch_success
  }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission: 
            <span className={ClassNames({
              'text-success': launch_success === true,
              'text-danger': launch_success !== true
            })}>
              {mission_name}
            </span>
          </h4>
          <p>Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></p>
        </div>
        <div className="col-md-3">
          <Link className="btn btn-secondary" to={`/launches/${flight_number}`}>Launch Details</Link>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    </div>
  );
}
