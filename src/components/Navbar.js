// import React, { useState } from 'react'
// import { a } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Navbar(props) {

    // const [mode, setMode] = useState('grey');




    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={props.hexCode}>{/*bg-body-tertiary*/}
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.logo}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">about</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse" >

                                {/* <input className="form-check-input"  type="checkbox" role="switch" onClick={props.goGreen} id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" onClick={props.goRed} id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" onClick={props.goYellow} id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Yellow</label> */}
                                {/* <button>hello</button> */}

                                <div className="form-check mx-3" >
                                    <input className="form-check-input" onClick={props.goGreen} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        green
                                    </label>
                                </div>
                                <div className="form-check mx-3" >
                                    <input className="form-check-input" onClick={props.goRed} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        red
                                    </label>
                                </div>
                                <div className="form-check mx-3"  >
                                    <input className="form-check-input" onClick={props.goGrey} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        grey
                                    </label>
                                </div>
                                <div className="form-check mx-3" >
                                    <input className="form-check-input" onClick={props.goYellow} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        yellow
                                    </label>
                                </div>









                            {/* <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" onClick={props.goGrey} id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Grey</label>
                            </div> */}
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
