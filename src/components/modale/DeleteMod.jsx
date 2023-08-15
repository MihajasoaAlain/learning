import React, { Component } from 'react'

export class Modale extends Component {
  render() {
    return (
      <div>
        <div className="modal">
    <div className="modal-content" >
      <h2>Confirmation de suppression</h2>
      <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
      <div className="modal-buttons">
        <button>Supprimer</button>
        <button>Annuler</button>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

export default Modale