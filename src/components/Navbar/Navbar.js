import React, { Component } from 'react';
import search from "../../constants/search.svg"
import profileImage from "../../constants/profileImage.png"
import {MenuItems} from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Projects<i className="fab 
                fa-react"></i></h1>
                <div className='search-area'>
                    <img src={search}></img>
                    <div>Search</div>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 
                'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                           <li key={index}>
                              <a className={item.cName} href={item.url}>
                                 <img src={item.iconPath}></img>
                              </a>
                            </li>
                        )
                    })}
                </ul>
                <div className='profile-area'>
                    <img className='profile-image' src={profileImage}></img>
                    <div className='profile-texts'>
                        <div className='profile-name'>burcu aslan</div>
                        <div className='profile-email'>aslanburcu@gmail.com</div>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navbar