import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()

        this.state = {
            response: ''
          };
        }

          componentDidMount() {
            this.callApi()
              .then(res => this.setState({ response: res.express }))
              .catch(err => console.log(err));
          }
        
          callApi = async () => {
            const response = await fetch('/api/hello');
            const body = await response.json();
        
            if (response.status !== 200)
            {
                console.log(body.message);
            }
        
            return body;
          };
        

    render() {
        return (
            <div>
                <p>This is in App</p>
                <p>{this.state.response}</p>
                
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