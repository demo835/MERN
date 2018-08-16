import React, { Component } from 'react'

class Profile extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>Condition: {this.props.response}</p>
                <p id="id">ID: {this.props.id}</p>
                {/* <form onSubmit={event => this.handleSubmit.bind(this)}>
                    <input type="text" id="condition" name="condition"/>
                    <button type="submit">Create Condition</button>
                </form> */}
                <form>
                    <input type="text" id="create"></input>
                    <button onClick={() => this.props.createCondition()}>Create Condition</button>
                </form>
                <form>
                    <input type="text" id="update"></input>
                    <button onClick={() => this.props.updateCondition()}>Update Condition</button>
                </form>
                <form>
                    <input type="text" id="delete"></input>
                    <button onClick={() => this.props.deleteCondition()}>Delete Condition</button>
                </form>
            </div>
        )
    }
}

export default Profile