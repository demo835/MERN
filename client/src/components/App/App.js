import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import Profile from "../Profile/Profile"
import SignIn from "../SignIn/SignIn"

class App extends Component {
    constructor() {
        super()

        this.state = {
            response: "",
            id: 0
          };
        }

          componentDidMount() {

            fetch("http://localhost:3001/show")
            .then(res => res.json())
            .then(data => {
                console.log("data is")
                console.log(data)
                // let items = []
                // for(let i = 0; i < data.length; i++)
                // {
                //     items[i] = data[i]
                // }
                this.setState({response: data[0].condition})
                this.setState({id: data[0]._id})
            })
          }
          
          updateCondition() {
            const inputCreate = document.querySelector("#update").value
            const idUpdate = document.querySelector("#id").value

            axios.put("http://localhost:3001/update", {
                condition: inputCreate, _id: idUpdate, params: idUpdate
              })
              .then(() => {
                this.props.history.push('/translations')
              })
              .catch((err) => {
                console.log(err)
              })
          }
          
          deleteCondition() {
            const inputCreate = document.querySelector("#delete").value

            axios.delete("http://localhost:3001/delete", {
                condition: inputCreate
              })
              .then(() => {
                this.props.history.push('/translations')
              })
              .catch((err) => {
                console.log(err)
              })
          }

          createCondition() {
            const inputCreate = document.querySelector("#create").value

            // axios({
            //   method: 'post',
            //   url: "http://localhost:3001/create",
            //   data: {
            //   condition: inputCreate
            //   },
            //   config: { headers: {'Content-Type': 'application/json' }}
            // })
            axios.post("http://localhost:3001/create", {
                condition: inputCreate
              })
              .then(() => {
                // this.props.history.push('/translations')
              })
              .catch((err) => {
                console.log(err)
              })
          }

    render() {
        return (
          <div>
        {/* <NavBar isLoggedIn={this.state.isLoggedIn} /> */}
        <div className='body'>
          <Switch>
            <Route path='/signin'
              render={(props) => {
                return (
                  <SignIn isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
            {/* <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            /> */}
            <Route
              path='/'
              render={() => {
                return (
                  <Profile response={this.state.response} id={this.state.id} createCondition={this.createCondition.bind(this)} updateCondition={this.updateCondition.bind(this)} deleteCondition={this.deleteCondition.bind(this)}/>
                )
              }}
            />
          </Switch>
        </div>
      </div>
          // <div>
          //   <Profile response={this.state.response} id={this.state.id} createCondition={this.createCondition.bind(this)} updateCondition={this.updateCondition.bind(this)} deleteCondition={this.deleteCondition.bind(this)}/>
          // </div>
        )
    }
}

export default App