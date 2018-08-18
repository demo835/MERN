import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import Profile from "../Profile/Profile"
import SignIn from "../SignIn/SignIn"
import LogOut from "../LogOut/LogOut"
import SignUpForm from "../SignUpForm/SignUpForm"
import NavBar from "../NavBar/NavBar"

class App extends Component {
    constructor() {
        super()

        this.state = {
            response: "",
            id: 0,
            email: '',
            password: '',
            isLoggedIn: false
          };
        }

          componentDidMount() {
            if (localStorage.token) {
              this.setState({
                isLoggedIn: true
              })
            } else {
              this.setState({
                isLoggedIn: false
              })
            }

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
        
          handleLogOut () {
            this.setState({
              email: '',
              password: '',
              isLoggedIn: false
            })
            localStorage.clear()
          }
        
          handleInput (e) {
            // console.log("e is")
            // console.log(e)
            // console.log("name is...")
            // console.log(e.target.name)
            // let n = e.target.name
            // console.log("value is...")
            // console.log(e.target.value)
            // let v = e.target.value
            // console.log("this is")
            // console.log(this)
            // this.setState({[n]: v})
            this.setState({[e.target.name]: e.target.value})
          }
        
          handleSignUp (e) {
            e.preventDefault()
            axios.post('http://localhost:3001/users/signup', {
              email: this.state.email,
              password: this.state.password
            })
            .then(response => {
              localStorage.token = response.data.token
              this.setState({ isLoggedIn: true })
            })
            .catch(err => console.log(err))
          }
        
          handleLogIn (e) {
            e.preventDefault()
            axios.post('http://localhost:3001/users/signin', {
              email: this.state.email,
              password: this.state.password
            })
            .then(response => {
              localStorage.token = response.data.token
              this.setState({isLoggedIn: true})
            })
            .catch(err => console.log(err))
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
        <NavBar isLoggedIn={this.state.isLoggedIn} />
          <div className='body'>
            <Switch>
              <Route path='/signin'
                render={(props) => {
                  return (
                    <SignIn isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput.bind(this)} handleSignUp={this.handleSignUp.bind(this)} />
                  )
                }}
              />
              <Route path='/signup'
                render={(props) => {
                  return (
                    <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput.bind(this)} handleSignUp={this.handleSignUp.bind(this)} />
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