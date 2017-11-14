import React from 'react';
import './responding-page.css';
import {Link} from 'react-router';

const RespondingPage = React.createClass({
  render(){
    return(
      <div className="container">
    <br/>
    <h4 className="quy-panel-title">APPLICATION FOR ADVANCE</h4>
    <hr/>
    <div className="row col-md-8 col-md-offset-2">
      <div className="row quy-date">
        <div className="col-md-1 col-md-offset-6">Time</div>
        <div className="col-md-4">
          <input  className="form-control" type="date"/>
        </div>
      </div>
      <br/>
      <div className="profile-right quy-user-info">
        <div className="panel">
            <div className="panel-body quy-panel-body">
                <ul className="list-unstyled task-list">
                    <li>
                      <div className="row">
                          <div className="col-md-2 col-md-offset-2"><span>Dear: </span></div>
                          <div className="col-md-7"><span><input type="text" className="form-control" placeholder="Enter Name Here.."/></span></div>
                      </div>
                    </li>
                    <hr/>
                    <li>
                      <div className="row">
                          <div className="col-md-2 col-md-offset-2"><span>Full Name: </span></div>
                          <div className="col-md-7"><span><input type="text" className="form-control" placeholder="Enter Your Full Name Here..."/></span></div>
                      </div>
                    </li>
                    <hr/>
                    <li>
                      <div className="row">
                          <div className="col-md-2 col-md-offset-2"><span>Part:</span></div>
                          <div className="col-md-7"><span><input type="text" className="form-control" placeholder="Enter Your Part Here.."/></span></div>
                      </div>
                    </li>
                    <hr/>
                    <li>
                    <div className="row">
                      <div className="col-md-2 col-md-offset-2"><span>Estimate Cost</span></div>
                      <div className="col-md-7"><span><input type="text" className="form-control" placeholder="Enter number cost..."/></span></div>
                    </div>
                    </li>
                    <hr/>
                    <li>
                    <div className="row">
                      <div className="col-md-2 col-md-offset-2"><span>Reason for advance:</span></div>
                      <div className="col-md-7"><span><textarea type="text" className="form-control" placeholder="Enter Your Bank Account Here..."></textarea></span></div>
                    </div>
                    </li>
                    <hr/>
                    <li>
                    <div className="row">
                      <div className="col-md-2 col-md-offset-2"><span>Billing Period</span></div>
                      <div className="col-md-7"><span><input type="text" className="form-control" placeholder="Enter time..."/></span></div>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <div className="row col-md-6 col-md-offset-4" >
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
      </div>
    </div>
  </div>
    )
  }

});


export default RespondingPage;