import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {
  render () {

    let navBarItems = [<NavItem key={1} href='/'>Your Conditions</NavItem>]

    if (this.props.isLoggedIn)
    {
      navBarItems.push(<NavItem key={2} href='/logout'>Log Out</NavItem>)
    }
    else
    {
      navBarItems.push(<NavItem key={3} href='/signup'>Sign Up</NavItem>)
      navBarItems.push(<NavItem key={4} href='/signin'>Log In</NavItem>)
    }

    return (
      <Navbar brand='Your Health' className='nav' right>
        {navBarItems}
      </Navbar>
    )
  }
}

export default NavBar
