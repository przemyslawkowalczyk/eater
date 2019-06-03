import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';

import axiosInstance from './axiosInstance';

export default class Restaurant extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
  }

  async componentDidMount() {
    const res = await axiosInstance.get('/restaurant/all');
    this.setState({
      restaurants: res.data
    });
  }

  render() {
    console.log(this.state);
    return (
      <Table>
        <thead>
          <tr>
            {/*<Link to="/">*/}
            <td>no.</td>
            <td>
                name
            </td>
            {/*</Link>*/}
          </tr>
        </thead>
        <tbody>
        {
          this.state && this.state.restaurants.map(r =>
            <tr key={r.id}>
              <td>{ r.id}</td>
              <td>
                <Link to={{
                  pathname: "/restaurant/" + r.id,
                  state: { from: this.props.location }
                }}>
                  { r.name }
                </Link></td>
            </tr>
          )
        }
        </tbody>
      </Table>
    );
  }
}