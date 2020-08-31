import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleLogin(evt){
        this.toggleModal();

        alert(this.username.value + " " + this.password.value);

        evt.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="50" widtg="50" alt="Resturant Pakwan" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >

                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" >
                                        <span className="fa fa-home fa-lg"></span> <i className="menu-color">Home</i>
                                </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> <i className="menu-color">About us</i>
                                </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> <i className="menu-color">Menu</i>
                                </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> <i className="menu-color">Contact us</i>
                                </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>LOGIN
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="image-container">
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c200290-4ec0-4e2b-99df-9ce9d219994d/d944mmk-1000df8b-c539-4957-8a1b-2045c42c5339.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNGMyMDAyOTAtNGVjMC00ZTJiLTk5ZGYtOWNlOWQyMTk5OTRkXC9kOTQ0bW1rLTEwMDBkZjhiLWM1MzktNDk1Ny04YTFiLTIwNDVjNDJjNTMzOS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NzIlmpPmvg4h49HYh9p9RUHBHrsDqogkjKW5Ui3GLdE" />
                                                            
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" placeholder= "Email/ Username" innerRef={(input) => this.username = input } />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" placeholder= "8 Digit" innerRef={(input) => this.password = input } />
                                
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input } />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}