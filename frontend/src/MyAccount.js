import React, { Component } from 'react';
import axiosInstance from './axiosInstance';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.initState = {
      name: '',
      latitude: '',
      longitude: ''
    };

    this.state = this.initState;
  }

  async createRestaurant(e) {
    const { name, latitude, longitude } = this.state;
    e.preventDefault();
    await axiosInstance.post('restaurant', {
      name,
      latitude: +latitude,
      longitude: +longitude
    });

    toast.success('Successful created');
    this.setState(this.initState);

  }

  onChange({ target }) {
    this.setState({
      [target.id]: target.value
    });
  }

  render() {
    return (
      <>
        <p>Hello user name</p>
        <Form onSubmit={this.createRestaurant.bind(this)}>
          <Form.Row>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={this.state.name} placeholder="Enter name" onChange={this.onChange.bind(this)}/>
              <Form.Text className="text-muted">
                Name of restaurant would be display in restaurants list.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="latitude">
              <Form.Label>latitude</Form.Label>
              <Form.Control value={this.state.latitude} type="number" placeholder="Enter szerokość" onChange={this.onChange.bind(this)}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="longitude">
              <Form.Label>longitude</Form.Label>
              <Form.Control value={this.state.longitude} type="number" placeholder="Enter dlugosc" onChange={this.onChange.bind(this)}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}