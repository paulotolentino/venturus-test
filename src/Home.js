import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import ThreeIcons from './components/ThreeIcons';
import Topo from './components/Topo';
import Table from './components/Table';
import {
  faLifeRing,
  faHeartbeat,
  faSmile
} from "@fortawesome/free-solid-svg-icons";
import RegistrationsItem from "./components/RegistrationItem";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

export default class Home extends React.Component {

  constructor(){
    super();

    this.state = {
      newUser: {
        username: '',
        name: '',
        email: '',
        city: '',
        ride: '',
        days: [],
      },

      users: [],
      posts: [],
      albums: [],
      photos: [],
      isLoading: true,
    }
  }


  componentDidMount = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.setState({ users: response.data });
    });
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({ posts: response.data });
    });
    axios.get("https://jsonplaceholder.typicode.com/albums").then(response => {
      this.setState({ albums: response.data });
    });
    axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
      this.setState({ photos: response.data });
    });

    // delay para dar tempo de receber os dados das apis
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000);
  };

  changeInput = (e, i) => {

    const value = e.target.value;

    switch(i){
      case 1:
        this.setState(prevState => ({
          newUser: {
            ...prevState.newUser,
            username: value
          }
        })); break;
      case 2:
        this.setState(prevState => ({
          newUser: {
            ...prevState.newUser,
            name: value
          }
        })); break;
      case 3:
        this.setState(prevState => ({
          newUser: {
            ...prevState.newUser,
            email: value
          }
        })); break;
      case 4: default:
        this.setState(prevState => ({
          newUser: {
            ...prevState.newUser,
            city: value
          }
        })); break;
    }

  }

  validation = (newUser) => {
    if(newUser.username === ''){
      alert("Por favor, preencha o campo Username.");
      document.getElementById('formUsername').focus();
      return false;
    }else if(newUser.name === ''){
      alert("Por favor, preencha o campo Name.");
      document.getElementById('formName').focus();
      return false;
    }else if(newUser.email === ''){
      alert("Por favor, preencha o campo E-mail.");
      document.getElementById('formEmail').focus();
      return false;
    }else if(newUser.ride === ''){
      alert("Por favor, selecione uma opção para Ride in group.");
      return false;
    }else if(newUser.days.length === 0){
      alert("Por favor, selecione ao menos 1 dia da semana.");
      return false;
    }
    return true;
  }

  submitUser = () => {
    const arrUsers =  this.state.users;
    const newUser = this.state.newUser;
    if(this.validation(newUser)){
      const newId = arrUsers[arrUsers.length-1].id+1;
      arrUsers.push({
        address:{ city: newUser.city ? newUser.city : 'Não informada'},
        email: newUser.email,
        name: newUser.name,
        username: newUser.username,
        id: newId,
        days: newUser.days,
        ride: newUser.ride
      })
      this.setState({
        users: arrUsers
      }, this.clearForm())
    }
  }

  clearForm = () => {
    this.setState({
      newUser: {
        username: '',
        name: '',
        email: '',
        city: '',
        ride: '',
        days: [],
      }
    })
  }

  changeDays = (day) => {
    const arrDays = this.state.newUser.days;
    if(arrDays.includes(day)){
      this.setState(prevState => ({
        newUser: {
          ...prevState.newUser,
          days: arrDays.filter((value) => {
            return value !== day
          })
        }
      }))
    }else {
      arrDays.push(day);
      this.setState(prevState => ({
        newUser: {
          ...prevState.newUser,
          days: arrDays
        }
      }))
    }
  }

  changeRide = (data) => {
    this.setState(prevState => ({
      newUser:{
        ...prevState.newUser,
        ride: data
      }
    }))
  }

  render() {
    const days = this.state.newUser.days;
    return (
      <section>
        <Navbar brand="Venturus Sports" user="Jason Bourne" />

        <Navigation />

        <ThreeIcons />

        <section className="conteudo">
          
          <Topo title="Users" input={true} />

          {this.state.isLoading ? <p>Loading...</p>:
          <Table
            users={this.state.users}
            posts={this.state.posts}
            photos={this.state.photos}
            albums={this.state.albums}
          />}

          <Topo title="Registration" input={false} />

          <section className="registration-options">
            <RegistrationsItem
              title="Need help?"
              icon={faLifeRing}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In id lorem libero. Vestibulum sit amet commodo tellus. "
            />

            <RegistrationsItem
              title="Why register?"
              icon={faHeartbeat}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In id lorem libero. Vestibulum sit amet commodo tellus. "
            />

            <RegistrationsItem
              title="What people are saying..."
              icon={faSmile}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In id lorem libero. Vestibulum sit amet commodo tellus. "
            />
          </section>

          <section className="form-section">
            <section className="group">
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    tabIndex="1"
                    value={this.state.newUser.username}
                    onChange={(e) => this.changeInput(e, 1)}
                    type="text"
                  />
                  <Form.Text className="text-muted">
                    Instrunctions to show on input focus.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    tabIndex="2"
                    value={this.state.newUser.name}
                    onChange={(e) => this.changeInput(e, 2)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    tabIndex="3"
                    value={this.state.newUser.email}
                    onChange={(e) => this.changeInput(e, 3)}
                    type="email"
                  />
                </Form.Group>

                <Button 
                  tabIndex="15"
                  className="save-button"
                  onClick={()=>this.submitUser()}
                  type="button"
                >
                  Save
                </Button>

                <Button 
                  tabIndex="16"
                  className="discart-button"
                  onClick={() => this.clearForm()}
                  type="button"
                >
                  Discart
                </Button>
              </Form>
            </section>

            <section className="group">
              <Form>
                <Form.Group controlId="formCity">
                  <section className="city-input">
                    <Form.Label>City</Form.Label>
                    <Form.Text className="text-muted optional-text">
                      optional
                    </Form.Text>
                  </section>
                  <Form.Control
                    tabIndex="4"
                    value={this.state.newUser.city}
                    onChange={(e) => this.changeInput(e, 4)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group >
                  <Form.Label className="label-ride">Ride in group</Form.Label>
                  <section className="group-radio" >
                    <Form.Group controlId="forAways">
                      <Form.Check
                        tabIndex="5"
                        custom
                        checked={this.state.newUser.ride === "Always"}
                        onChange={()=> this.changeRide('Always')}
                        name="group"
                        className="radio-ride"
                        type="radio"
                        label={`Always`}
                      />
                    </Form.Group>

                    <Form.Group controlId="forSometimes">
                      <Form.Check
                        tabIndex="6"
                        custom
                        checked={this.state.newUser.ride === "Sometimes"}
                        onChange={()=> this.changeRide('Sometimes')}
                        name="group"
                        className="radio-ride"
                        type="radio"
                        label={`Sometimes`}
                      />
                    </Form.Group>

                    <Form.Group controlId="forNever">
                      <Form.Check
                        tabIndex="7"
                        custom
                        checked={this.state.newUser.ride === "Never"}
                        onChange={()=> this.changeRide('Never')}
                        name="group"
                        type="radio"
                        label={`Never`}
                        className="radio-ride"
                      />
                    </Form.Group>
                  </section>
                </Form.Group>

                <Form.Group >
                  <Form.Label className="label-ride">Days of the week</Form.Label>
                  <section className="group-radio" >
                    <Form.Group controlId="forSun">
                      <Form.Check
                        tabIndex="8"
                        custom
                        checked={days.includes(1)}
                        onChange={()=>this.changeDays(1)}
                        name="group"
                        type="checkbox"
                        label={`Sun`}
                      />
                    </Form.Group>

                    <Form.Group controlId="forMon">
                      <Form.Check
                        tabIndex="9"
                        custom
                        checked={days.includes(2)}
                        onChange={()=>this.changeDays(2)}
                        name="group"
                        type="checkbox"
                        label={`Mon`}
                      />
                    </Form.Group>
                    
                    <Form.Group controlId="forTue">
                      <Form.Check
                        tabIndex="10"
                        custom
                        checked={days.includes(3)}
                        onChange={()=>this.changeDays(3)}
                        name="group"
                        type="checkbox"
                        label={`Tue`}
                      />
                    </Form.Group>
                    
                    <Form.Group controlId="forWed">
                      <Form.Check
                        tabIndex="11"
                        custom
                        checked={days.includes(4)}
                        onChange={()=>this.changeDays(4)}
                        name="group"
                        type="checkbox"
                        label={`Wed`}
                      />
                    </Form.Group>
                    
                    <Form.Group controlId="forThu">
                      <Form.Check
                        tabIndex="12"
                        custom
                        checked={days.includes(5)}
                        onChange={()=>this.changeDays(5)}
                        name="group"
                        type="checkbox"
                        label={`Thu`}
                      />
                    </Form.Group>
                    
                    <Form.Group controlId="forFri">
                      <Form.Check
                        tabIndex="13"
                        custom
                        checked={days.includes(6)}
                        onChange={()=>this.changeDays(6)}
                        name="group"
                        type="checkbox"
                        label={`Fri`}
                      />
                    </Form.Group>
                    
                    <Form.Group controlId="forSat">
                      <Form.Check
                        tabIndex="14"
                        custom
                        checked={days.includes(7)}
                        onChange={()=>this.changeDays(7)}
                        name="group"
                        type="checkbox"
                        label={`Sat`}
                      />
                    </Form.Group>

                    
                  </section>
                </Form.Group>
              </Form>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
