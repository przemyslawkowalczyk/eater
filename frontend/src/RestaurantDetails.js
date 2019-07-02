import React, { Component } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import axiosInstance from './axiosInstance';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class RestaurantDetails extends Component {
  constructor(props) {
    super(props);

    this.handleShow    = this.handleShow.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose   = this.handleClose.bind(this);

    this.handleDishShow    = this.handleDishShow.bind(this);
    this.handleDishConfirm = this.handleDishConfirm.bind(this);
    this.handleDishClose   = this.handleDishClose.bind(this);

    this.state = {
      restaurant: {
        name: '',
        latitude: 0,
        longitude: 0,
      },
      menuSelected: {},
      dishName: '',
      dishPrice: 0,
      newMenuName: ''
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  async handleConfirm() {
    await axiosInstance.post('/menu/', {
      name: this.state.newMenuName,
      restaurantId: this.props.match.params.id
    });
    this.setState({
      newMenuName: '',
      show: false
    });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleDishClose() {
    console.log(this.state);
    this.setState({ showDish: false });
  }

  async handleDishConfirm() {
    await axiosInstance.post('/dish', {
      name: this.state.dishName,
      price: +this.state.dishPrice,
      menu: +this.state.menuSelected.id
    });
    this.setState({
      dishName: '',
      dishPrice: 0,
      showDish: false
    });
    await this.componentDidMount();
  }

  async handleMenuShow(id) {
    this.setState({
      expandedMenu: id
    })
  }

  handleDishShow(menuSelected) {
    console.log(menuSelected);
    this.setState({ showDish: true, menuSelected });
  }

  async componentDidMount() {
    const restaurant = _.get(await axiosInstance.get('/restaurant/' + this.props.match.params.id), 'data');
    this.setState({ restaurant });
  }

  async deleteMenu(id) {
    await axiosInstance.delete('/menu/' + id);
    await this.componentDidMount();
  }

  onChange({ target }) {
    this.setState({
      [target.id]: target.value
    });
  }

  render() {
    return (
      <>
        <h2>Details of <b>{ this.state.restaurant.name }</b></h2>
        <Table>
          {
            this.state && this.state.restaurant && this.state.restaurant.menus && this.state.restaurant.menus.length &&
            <thead>
            <tr>
              <td>no.</td>
              <td>
                name
              </td>
              <td>
                actions
              </td>
            </tr>
            </thead>
          }
          <tbody>
          {
            this.state && this.state.restaurant && this.state.restaurant.menus && this.state.restaurant.menus.length ? this.state.restaurant.menus.map(m =>
              <tr key={m.id}>
                <td>{ m.id}</td>
                <td>
                    { m.name }
                </td>
                <td>
                  <Button variant="info" onClick={this.handleMenuShow.bind(this, m.id)} style={{ marginRight: '2rem' }}>
                    { this.state.expandedMenu === m.id ? 'Hide' : 'Show' }
                  </Button>
                  <Button variant="primary" onClick={this.handleDishShow.bind(this, m)} style={{ marginRight: '2rem' }}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={this.deleteMenu.bind(this, m.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ) : <h3>Restaurant doesn't have menus yet, please add ones by button below</h3>
          }
          </tbody>
          <Row >
            <Button onClick={this.handleShow} variant="success">Add menu</Button>
          </Row>
        </Table>

        <Modal show={this.state.showDish} onHide={this.handleDishClose} key={1}>
          <Modal.Header closeButton>
            <Modal.Title>Add menu for {this.state.menuSelected.name}</Modal.Title>
          </Modal.Header>
          <Container>
            <Form>
              <Form.Group controlId="dishName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.dishName} placeholder="Enter name" onChange={this.onChange.bind(this)}/>
                <Form.Text className="text-muted">
                  Name of dish will be display in menu.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="dishPrice">
                <Form.Label>Name</Form.Label>
                <Form.Control type="number" value={this.state.dishPrice} placeholder="Enter price" onChange={this.onChange.bind(this)}/>
                <Form.Text className="text-muted">
                  Price of menu will be display in menu.
                </Form.Text>
              </Form.Group>
            </Form>
          </Container>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleDishClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleDishConfirm}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={this.state.show} onHide={this.handleClose} key={2}>
          <Modal.Header closeButton>
            <Modal.Title>Add menu for {this.state.restaurant.name}</Modal.Title>
          </Modal.Header>
          <Container>
            <Form>
              <Form.Group controlId="newMenuName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.newMenuName} placeholder="Enter name" onChange={this.onChange.bind(this)}/>
                <Form.Text className="text-muted">
                  Name of menu would be display in restaurants list.
                </Form.Text>
              </Form.Group>
            </Form>
          </Container>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleConfirm}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}