import React, { Component } from 'react'

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
        
          createCondition() {

          }
        //   callApi = async () => {
        //     const response = await fetch('http://localhost:3001/show');
        //     const body = await response.json();
        
        //     if (response.status !== 200)
        //     {
        //         console.log(body.message);
        //     }
            
        //     return body;
        //   };
        

    render() {
        return (
            <div>
                <p>Condition: {this.state.response}</p>
                <input type="text"></input>
                <button onClick={() => this.createCondition()}>Create Condition</button>
                <button onClick={() => this.updateCondition()}>Update Condition</button>
                <button onClick={() => this.deleteCondition()}>Delete Condition</button>

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