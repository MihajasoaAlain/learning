import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Gestion de matériel</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Accueil</a>
          </li>
          <li className="nav-item">
         <a className="nav-link" href="#">ajout</a>
          </li>
          <li className="nav-item">
         <a className="nav-link" href="#">Liste</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input 
            className="form-control me-2"
            type="search"
            placeholder="chercher..."
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            chercher
          </button>
        </form>
      </div>
    </div>
  </nav>

    )
  }
}

export default Navbar