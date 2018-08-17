import React, { Component } from 'react'
import "./Profile.css"

class Profile extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="row">
            <div className="col s12 m6">
              <div className="card white">
                <div className="card-content black-text">
                <p>Condition: {this.props.response}</p>
                <p id="id">ID: {this.props.id}</p>

                <form>
                    <input type="text" id="create"></input>
                    <i className="material-icons prefix">add_circle_outline</i>
                    <button className="optionButtons btn
 waves-effect waves-light #e3f2fd blue lighten-4 col s12" onClick={() => this.props.createCondition()}>Create Condition</button>
                </form>
                <form>
                    <input type="text" id="update"></input>
                    <i className="material-icons prefix">edit</i>
                    <button className="optionButtons btn
 waves-effect waves-light #b3e5fc light-blue lighten-3 col s12" onClick={() => this.props.updateCondition()}>Update Condition</button>
                </form>
                <form>
                    <input type="text" id="delete"></input>
                    <i className="material-icons prefix">delete</i>
                    <button className="optionButtons btn
 waves-effect waves-light #81d4fa light-blue lighten-2 col s12" onClick={() => this.props.deleteCondition()}>Delete Condition</button>
                </form>
                </div>
                </div>
                </div>
                </div>
            </div>
        //     <div class="row">
        //     <div class="col s12 m6">
        //       <div class="card blue-grey darken-1">
        //         <div class="card-content white-text">
        //           <span class="card-title">Card Title</span>
        //           <p>I am a very simple card. I am good at containing small bits of information.
        //           I am convenient because I require little markup to use effectively.</p>
        //         </div>
        //         <div class="card-action">
        //           <a href="#">This is a link</a>
        //           <a href="#">This is a link</a>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        )
    }
}

export default Profile