import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

import axiosInstance from './axiosInstance';

export default class Restaurant extends Component {
  constructor(props) {
    super(props);
  }

  async fetchList() {
    const res = await axiosInstance.get('/restaurant/all');
    this.setState({ restaurants: res.data });
  }

  async componentDidMount() {
    this.fetchList();
  }

  async deleteRestaurant(rId) {
    await axiosInstance.delete('restaurant/' + rId);
    toast.success('Successful deleted');
    this.fetchList();
  }

  render() {
    console.log(this.state);
    return (
      <Table>
        <thead>
          <tr>
            <td>no.</td>
            <td>
                name
            </td>
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
              <td>
                <Button variant="danger" onClick={this.deleteRestaurant.bind(this, r.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          )
        }
        </tbody>
      </Table>
    );
  }
}