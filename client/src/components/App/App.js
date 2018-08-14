import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor() {
        super()

        this.state = {
            response: ""
          };
        }

        //   componentDidMount() {
        //     this.callApi()
        //       .then(res => this.setState({ response: res.express }))
        //       .catch(err => console.log(err));
        //   }
        
        //   callApi = async () => {
        //     const response = await fetch('/api/hello');
        //     const body = await response.json();
        
        //     if (response.status !== 200)
        //     {
        //         console.log(body.message);
        //     }
            
        //     return body;
        //   };

          componentDidMount() {
            // fetch("https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition?patient=4342012", {
            //     headers: {
            //         "Accept": "application/json",
            //         "Authorization": "<OAuth2 Bearer Token>"
            //     }
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data)
            //     // textArea.innerHTML = data.entry[0].resource.code.text
            //     let test = data.entry[0].resource.code.text
            //     this.setState({response: test})
            // })
            // .catch(err => console.log(err))

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
            })

            // this.callApi()
            //   .then(res => this.setState({ response: res.express }))
            //   .catch(err => console.log(err));

            //   console.log("response is...")
            //   let test = this.state.response
            //   console.log(test)
          }
          
          updateCondition() {
            const inputCreate = document.querySelector("#update").value

            axios.put("http://localhost:3001/update", {
                condition: inputCreate
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

            // const inputCreate = document.querySelector("#condition").value
            // const send = {condition: inputCreate}

            // console.log(e)
            // console.log("In Delete Condition, Front end")
            
            // if(!inputCreate) {
            //     console.log("You haven't entered anything!")
            // }
            // else {
            //     console.log(inputCreate)
            // }
            

            // fetch("http://localhost:3001/create", {
            //     method: 'POST',
            //     body: JSON.stringify(send)
            //   }).then(res => res.json())
            //   .catch(error => console.error('Error:', error))
            //   .then(response => console.log('Success:', response));
            
            // debugger
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

            // const inputCreate = document.querySelector("#create").value
            // const send = {condition: inputCreate}

            // console.log(e)
            // console.log("In Create Condition")
            
            // if(!inputCreate) {
            //     console.log("You haven't entered anything!")
            // }
            // else {
            //     console.log(inputCreate)
            // }
            

            // fetch("http://localhost:3001/create", {
            //     method: 'POST',
            //     body: inputCreate
            //   })
            
            // debugger
          }
        
        //   handleSubmit(event){
        //       event.preventDefault()
        //       let data = new FormData(event.target)
            

        //     //   data
        //       data.body.condition = document.querySelector("#condition").value

        //       console.log("data is ")
        //       console.log(data)

        //       fetch("http://localhost:3001/create", {
        //         method: 'POST',
        //         body: data
        //       })
        //   }

    render() {
        return (
            <div>
                <p>Condition: {this.state.response}</p>
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
        //     <Router>
        //     <div>
        //     <nav>
        //         <h1>React Translator</h1>
        //         <Link to="/search">Search</Link>
        //         <Link to="/results">Results</Link>
        //         <Link to="/translations">Saved Translations</Link>
        //     </nav>
        //     <main>
        //         <Switch>
        //         <Route
        //             path="/search"
        //             render={(props) => {
        //             return (
        //                 <Search
        //                 {...props}
        //                 setTranslation={ (data, language ) => this.setTranslation(data, language ) }
        //                 />
        //             )
        //             }}
        //         />
        //         <Route
        //             path="/results"
        //             render={(props) => {
        //             return (
        //                 <Results
        //                 {...props}
        //                 translation={ this.state.translation }
        //                 language={ this.state.language }
        //                 />
        //             )
        //             }}
        //         />
        //         <Route
        //             path="/translations"
        //             component={ Translations }
        //         />
        //         <Route
        //             path="/*"
        //             render={() => {
        //             return (
        //                 <Redirect to="/search" />
        //             )
        //             }}
        //         />
        //         </Switch>
        //     </main>
        //     </div>
        // </Router>
        )
    }
}

export default App

//   callApi = async () => {
        //     const response = await fetch('http://localhost:3001/show');
        //     const body = await response.json();
        
        //     if (response.status !== 200)
        //     {
        //         console.log(body.message);
        //     }
            
        //     return body;
        //   };