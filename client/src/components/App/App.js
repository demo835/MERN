import React, { Component } from 'react'
import axios from 'axios'

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

            axios.post("http://localhost:3001/create", {
                condition: inputCreate
              })
              .then(() => {
                this.props.history.push('/translations')
              })
              .catch((err) => {
                console.log(err)
              })
          }

    render() {
        return (
            <div>
                <p>Condition: {this.state.response}</p>
                <p id="id">ID: {this.state.id}</p>
                {/* <form onSubmit={event => this.handleSubmit.bind(this)}>
                    <input type="text" id="condition" name="condition"/>
                    <button type="submit">Create Condition</button>
                </form> */}
                <form>
                    <input type="text" id="create"></input>
                    <button onClick={() => this.createCondition()}>Create Condition</button>
                </form>
                <form>
                    <input type="text" id="update"></input>
                    <button onClick={() => this.updateCondition()}>Update Condition</button>
                </form>
                <form>
                    <input type="text" id="delete"></input>
                    <button onClick={() => this.deleteCondition()}>Delete Condition</button>
                </form>
            </div>
        )
    }
}

export default App